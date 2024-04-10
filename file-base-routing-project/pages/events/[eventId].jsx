import EventSummary from "../../components/event-detail/event-summary";
import EventLogistics from "../../components/event-detail/event-logistics";
import EventContent from "../../components/event-detail/event-content";
import ErrorAlert from "../../components/ui/error-alert";
import { getEventById, getFeaturedEvents } from "../../helper/api-util";
import Head from "next/head";
import Comments from "../../components/input/comments";

const EventDetailPage = (props) => {
  const event = props.selectedEvent;
  if (!event) {
    return (
      <div className="center">
        <p>Loading...</p>
      </div>
    );
  }
  return (
    <>
      <Head>
        <title>{event.title}</title>
        <meta
          name="description"
          content="Find a lot of great events that allow you to evolve..."
        />
      </Head>
      <EventSummary title={event.title} />
      <EventLogistics
        date={event.date}
        address={event.location}
        image={event.image}
        imgAlt={event.title}
      />
      <EventContent>
        <p>{event.description}</p>
      </EventContent>
      <Comments eventId={event.id} />
    </>
  );
};

export default EventDetailPage;

export const getStaticProps = async (context) => {
  const { eventId } = context.params;
  const event = await getEventById(eventId);
  if (!event) {
    return {
      notFound:true
    }
  }
  return {
    props: {
      selectedEvent: event
    },
    revalidate: 30
  }
};

export const getStaticPaths = async () => {
  const events = await getFeaturedEvents();
  const paths = events.map((event) => ({ params: { eventId: event.id } }))
  return {
    paths: paths,
    fallback:'blocking'
  };
}