import Image from 'next/image'
import Link from 'next/link'
import styles from 'styles/Home.module.css'

import Layout from 'components/Layout'
import Section from 'components/Section'
import GridCard from "components/GridCard"

import { getPagesByTemplate, getEvents } from 'integrations/directus';

export async function getServerSideProps({ params }) {
  const places = await getPagesByTemplate('map')
  const events = await getEvents(10)

  // const randomActivities = [...Array(10)].map((item, i) => {
  //   const randomIndex = Math.floor(Math.random()*activities.length);
  //   const randomActivity = activities[randomIndex]
  //   activities.splice(randomIndex,1)
  //   return randomActivity
  // })

  return {
    props: { places, events }
  }
}

export default function Home({ places, events }) {

  const mapPages = places.map(page => {
    return {
      ...page,
      image: page.main_image,
      classification: 'map'
    }
  })

  return (
    <Layout color="rainbow">
      <section className={`relative`} id="landing">
        <div className="container py-5 mx-auto flex justify-center items-center">
          <div className={``}>
            <h1 className={`text-[38vw] sm:text-[28vw] md:text-[24vw] font-display mt-6 mb-6 sm:text-center sm:whitespace-nowrap`}>
              <span className="text-black sm:text-red">unboring </span>
              <span className="text-red sm:text-black">kw</span>
            </h1>
            <div className="flex justify-center w-full relative">
              <p className="text-lg md:text-2xl mb-4 w-5/12 md:w-3/12">
                {`Family-friendly things to do and places to go in Waterloo Region`}
              </p>
              <div data-aos="zoom-in" data-aos-delay="300" className="relative w-5/12 md:w-3/12">
                <Image src="/goose.png" height="200" width="200" className="-mt-8 object-contain absolute bottom-1/4 left-0 lg:bottom-0 md:left-1/4 scale-[1.75] sm:scale-125 md:scale-[1.7]" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className={`w-full relative mb-6`} data-aos="fade-up" data-aos-delay="600">
        <div className="container p-3 mx-auto">
          <h2 className="font-title text-3xl md:text-4xl mt-6 mb-6">
            Upcoming Events 🗓
          </h2>
          <div className="flex flex-nowrap space-x-4 overflow-auto styled-scrollbar snap-x snap-mandatory ">
            {events.map(event => <GridCard item={event} showImage key={event.slug} className="w-10/12 md:w-5/12 lg:w-3/12 flex-none snap-center snap-always md:snap-start" />)}
          </div>
          <div className="w-full text-lg mt-4">
            <Link href="/events">See all the events</Link>
          </div>
        </div>
      </section>

      {/*<section className={`w-full relative mb-6`} data-aos="fade-up">
        <div className="container p-3 mx-auto">
          <h2 className="font-title text-3xl md:text-4xl mb-6">
            Activity Ideas 🏓
          </h2>
          <div className="flex flex-nowrap space-x-4 overflow-auto styled-scrollbar snap-x snap-mandatory ">
            {activities.map(activity => <GridCard item={activity} showImage key={activity.slug} className="w-10/12 md:w-5/12 lg:w-3/12 flex-none snap-center snap-always md:snap-start" />)}
          </div>
          <div className="w-full text-lg mt-4">
            <Link href="/activities">See all the activities</Link>
          </div>
        </div>
      </section>
*/}
      <section className={`w-full relative mb-6`} data-aos="fade-up">
        <div className="container p-3 mx-auto">
          <h2 className="font-title text-3xl md:text-4xl mb-6">
            Places to Go 🥾
          </h2>
          <div className="flex flex-nowrap space-x-4 overflow-auto styled-scrollbar snap-x snap-mandatory ">
            {mapPages.map(map => <GridCard item={map} showImage showDescription key={map.slug} className="w-10/12 md:w-5/12 lg:w-3/12 flex-none snap-center snap-always md:snap-start" />)}
          </div>
{/*          <div className="w-full text-lg mt-4">
            <Link href="/places">See all the maps</Link>
          </div>*/}
        </div>
      </section>
    
    </Layout>
  )
}


