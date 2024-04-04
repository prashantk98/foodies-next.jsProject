import { useRouter } from "next/router";
import EventList from "../../components/events/EventList";
import ResultsTitle from "../../components/events/results-title";
import Button from "../../components/ui/button";
import ErrorAlert from "../../components/ui/error-alert";
import { getFilteredEvents } from "../../dummy-data";

const FilteredEventPage = () => {
  const router = useRouter();
  const filterData = router.query.slug;
  console.log(filterData);
  if (!filterData) {
    return <p className="center">Loading...</p>;
  }
  const filterYear = filterData[0];
  const filterMonth = filterData[1];
  const numYear = +filterYear;
  const numMonth = +filterMonth;
  if (
    isNaN(numYear) ||
    isNaN(numMonth) ||
    numYear > 2023 ||
    numYear < 2021 ||
    numMonth < 1 ||
    numMonth > 12
  ) {
    return (
      <>
        <ErrorAlert>
          <p>Invalid filter, Please adjust you value</p>
        </ErrorAlert>
        <div className="center">
          <Button link="/events">Show All Events</Button>
        </div>
      </>
    );
  }
  const filteredEvents = getFilteredEvents({ year: numYear, month: numMonth });

  if (!filteredEvents || filteredEvents.length === 0) {
    return (
      <>
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
      <ResultsTitle date={date} />
      <EventList items={filteredEvents} />
    </>
  );
};

export default FilteredEventPage;
