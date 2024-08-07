import Image from 'next/image'
import Link from 'next/link'
import dynamic from 'next/dynamic'
import { buildDateString } from 'utils/dates'
const ReactMarkdown = dynamic(() => import('react-markdown'))

const GridCard = ({ item, displayFields, showImage, showDescription, className="" }) => {
  if (!item) return null

  const { 
    featured,
    title,
    description,
    starts_at,
    ends_at,
    categories,
    tags,
    image,
    location,
    slug,
    classification,
    location_source_text 
  } = item;

  const dateString = buildDateString(starts_at, ends_at)

  const urlFragments = {
    'activity': 'activities',
    'event': 'events',
    'recurring event': 'events',
    'map': 'maps'
  }
  const urlFragment = urlFragments[classification]
  const imageUrl = image?.id ? `${process.env.NEXT_PUBLIC_DIRECTUS_URL}/assets/${image.id}?key=small-640` : "/default-event-image.png"


  return (
    <div className={`${className} shadow snap-start transition-all relative p-0 items-start flex-col bg-white overflow-hidden mb-1`}>
      <div className={`w-full h-full min-h-0`}>
      { showImage &&
        <div className={`aspect-square flex-none overflow-hidden bg-latte`}>
          <Image
            className={`object-cover w-full h-full min-[500px]:max-md:aspect-square`}
            src={imageUrl}
            alt={"event image"}
            width={350}
            height={350}
          />
        </div>
      }
        <div className={`basis-2/3 flex-auto text-left overflow-auto h-full styled-scrollbar p-3`}>
          <Link href={`/${urlFragment}/${slug}`}>
            <h3 className="text-xl mb-2 font-body font-medium">{title}</h3>
          </Link>
            { classification === "event" && <p className="text-sm mb-1 space-x-3 flex flex-nowrap"><span>🗓</span><time>{dateString}</time></p> }
            { description && showDescription && <ReactMarkdown>{description}</ReactMarkdown>}
            { location && <p className="text-sm mb-1 space-x-3 flex flex-nowrap"><span>📍</span><span>{location.name}</span></p>}
            { !location && location_source_text && <p className="text-sm mb-1 space-x-3 flex flex-nowrap"><span>📍</span><span>{location_source_text}</span></p>}
            { Boolean(tags?.length) && <p className="text-sm mb-1 space-x-3 flex flex-nowrap"><span>#️⃣</span><span>{tags.map(t => t.name).join(', ')}</span></p>}
        </div>
      </div>
    </div>
  )
}

export default GridCard