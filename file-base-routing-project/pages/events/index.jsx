import Head from 'next/head';
import { useRouter } from 'next/router';
import EventList from '../../components/events/EventList';
import EventsSearch from '../../components/events/events-search';
import { getAllEvents } from '../../helper/api-util';

const AllEventsPage = (props) => {
  const events = props.events;
  const router = useRouter();
  const findEventsHandler = (year, month) => {
    const fullPath = `events/${year}/${month}`;
    router.push(fullPath);
  }
  return (
    <>
      <Head>
        <title>All Events</title>
        <meta
          name="description"
          content="Find a lot of great events that allow you to evolve..."
        />
      </Head>
      <EventsSearch onSearch={findEventsHandler} />
      <EventList items={events} />
    </>
  );
}

export default AllEventsPage;

export const getStaticProps = async () => {
  const events = await getAllEvents();
  return {
    props: {
      events: events,
    },
    revalidate: 60,
  };
};