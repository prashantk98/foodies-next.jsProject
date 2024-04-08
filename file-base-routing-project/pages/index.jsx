import React from 'react'
import EventList from '../components/events/EventList';
import { getFeaturedEvents } from '../helper/api-util';
// import { getFeaturedEvents } from '../dummy-data';

const HomePage = (props) => {
  const featuredEvents = props.events;
  return (
    <div>
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