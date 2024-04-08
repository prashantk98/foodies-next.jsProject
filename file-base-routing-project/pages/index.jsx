import EventList from '../components/events/EventList';
import { getFeaturedEvents } from '../helper/api-util';
import Head from 'next/head'
// import { getFeaturedEvents } from '../dummy-data';

const HomePage = (props) => {
  const featuredEvents = props.events;
  return (
    <div>
      <Head>
        <title>NextJs Events</title>
        <meta name='description' content='Find a lot of great events that allow you to evolve...' />
      </Head>
      <EventList items={featuredEvents} />
    </div>
  )
}
export const getStaticProps = async () => {
  return {
    props: {
      events: await getFeaturedEvents()
    },
    revalidate: 1800
  }
}

export default HomePage