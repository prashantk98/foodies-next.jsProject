import { useRouter } from "next/router";
import EventList from "../../components/events/EventList";
import ResultsTitle from "../../components/events/results-title";
import Button from "../../components/ui/button";
import ErrorAlert from "../../components/ui/error-alert";
import { getFilteredEvents } from "../../helper/api-util";
// import { getFilteredEvents } from "../../dummy-data";
import useSwr from "swr";
import { useEffect, useState } from "react";
import Head from "next/head";

const FilteredEventPage = () => {
  const router = useRouter();
  const [loadedEvents, setLoadedEvents] = useState();
  const filterData = router.query.slug;
  const { data, error } = useSwr(
    "https://nextjs-events-project-7f452-default-rtdb.firebaseio.com/events.json",
    (url) => fetch(url).then((res) => res.json())
  );
  useEffect(() => {
    if (data) {
      const events = [];
      for (const key in data) {
        events.push({
          ...data[key],
          id: key,
        });
      }
      setLoadedEvents(events);
    }
  }, [data]);
  let pageHeadData = (
    <Head>
      <title>Filtered Events</title>
      <meta
        name="description"
        content={`A list of filtered data.`}
      />
    </Head>
  );
  if (!loadedEvents) {
    return (
      <>
        {pageHeadData}
        <p className="center">Loading...</p>;
      </>
    );
  }
  const filterYear = filterData[0];
  const filterMonth = filterData[1];
  const numYear = +filterYear;
  const numMonth = +filterMonth;
  pageHeadData = (
    <Head>
      <title>Filtered Events</title>
      <meta
        name="description"
        content={`All events for ${numMonth}/${numYear}.`}
      />
    </Head>
  );

  if (
    isNaN(numYear) ||
    isNaN(numMonth) ||
    numYear > 2023 ||
    numYear < 2021 ||
    numMonth < 1 ||
    numMonth > 12 ||
    error
  ) {
    return (
      <>
        {pageHeadData}
        <ErrorAlert>
          <p>Invalid filter, Please adjust you value</p>
        </ErrorAlert>
        <div className="center">
          <Button link="/events">Show All Events</Button>
        </div>
      </>
    );
  }
  const filteredEvents = loadedEvents.filter((event) => {
    const eventDate = new Date(event.date);
    return (
      eventDate.getFullYear() === numYear &&
      eventDate.getMonth() === numMonth - 1
    );
  });

  if (!filteredEvents || filteredEvents.length === 0) {
    return (
      <>
        {pageHeadData}
        <ErrorAlert>
          <p>No events found for the chosen filter!</p>
        </ErrorAlert>
        <div className="center">
          <Button link="/events">Show All Events</Button>
        </div>
      </>
    );
  }
  const date = new Date(numYear, numMonth - 1);
  return (
    <>
      {pageHeadData}
      <ResultsTitle date={date} />
      <EventList items={filteredEvents} />
    </>
  );
};

export default FilteredEventPage;

// export const getServerSideProps = async (context) => {
//   const { params } = context;
//   const filterData = params.slug
//   const filterYear = filterData[0];
//   const filterMonth = filterData[1];
//   const numYear = +filterYear;
//   const numMonth = +filterMonth;
//   if (
//     isNaN(numYear) ||
//     isNaN(numMonth) ||
//     numYear > 2023 ||
//     numYear < 2021 ||
//     numMonth < 1 ||
//     numMonth > 12
//   ) {
//     return (
//       {
//         props: {
//           hasError: true
//         }
//       }
//     );
//   }
//   const filteredEvents = await getFilteredEvents({ year: numYear, month: numMonth });

//   // if (!filteredEvents || filteredEvents.length === 0) {
//     return (
//       {
//         props: {
//           events: filteredEvents,
//           date: {
//             year: numYear,
//             month: numMonth
//           }
//       }}
//     );
//   // }
// }
