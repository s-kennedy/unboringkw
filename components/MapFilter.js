import { useState, useEffect, useRef } from 'react'
import { tagEmojiDict, eventCategories } from 'utils/constants'
import ReactModal from 'react-modal';

const TagButton = ({ tag, isSelected, toggleFilter }) => {
  const tagEmoji = tagEmojiDict[tag.name]
  const handleClick = () => {
    toggleFilter(tag.id)
  }

  return (
    <button onClick={handleClick} className={`btn hover:bg-latte text-sm px-2 py-1 m-1 ml-0 border-2 ${isSelected ? '!bg-red !text-white' : 'bg-white text-black'}`}>
      <span className="whitespace-nowrap">{tag.name}</span>
      {tagEmoji && <span className="ml-1">{tagEmoji}</span>}
    </button>
  )
}

const CategoryButton = ({ category, isSelected, toggleFilter }) => {
  const handleClick = () => {
    toggleFilter(category.id)
  }

  return (
    <button onClick={handleClick} className={`btn hover:bg-latte text-sm px-2 py-1 m-1 ml-0 border-2 ${isSelected ? '!bg-purple !text-white' : 'bg-white text-black'}`}>
      <span className="whitespace-nowrap">{category.name}</span>
    </button>
  )
}

const MapFilter = ({
  toggleFilter,
  selectedTags=[],
  toggleCategory,
  selectedCategories=[],
  reset,
  appElementId,
  categories,
  categoriesName,
  tags,
  tagsName,
  map,
  toggleView,
  view
}) => {

  const ref = useRef(null);
  const [filter, setFilter] = useState()

  useEffect(() => {
    if (ref.current && !filter) {
      setFilter(ref.current)
    }
  }, [ref]);

  useEffect(() => {
    if (filter && map) {
      map.controls[google.maps.ControlPosition.TOP_RIGHT].push(filter);
    }
  }, [filter])

  useEffect(() => {
    ReactModal.setAppElement(appElementId)
  })

  const [isOpen, setOpen] = useState(false)

  const openFilters = () => {
    setOpen(true)
  }

  const closeFilters = () => {
    setOpen(false)
  }
  const toggleFilters = () => {
    setOpen(!isOpen)
  }

  const filterCount = selectedTags.length + selectedCategories.length
  const allCategories = categories ? categories : []

  return (
    <div className={`transition-all m-2 mb-4`} ref={ref}>
      <div className="space-x-2">
        <button onClick={openFilters} className="btn btn-red text-sm items-baseline">
          {filterCount ? `Filters (${filterCount})` : 'Filters 🎯'}
        </button>
        <button onClick={toggleView} className={`btn btn-white text-sm`}>
          {view === "map" ? 'Grid view' : 'Map view'}
          <i className={`ml-1 fa-solid ${view === "map" ? 'fa-table-cells' : 'fa-location-dot'}`}></i>
        </button>
      </div>

      <ReactModal
        isOpen={isOpen}
        onRequestClose={closeFilters}
        shouldCloseOnOverlayClick={true}
        shouldCloseOnEsc={true}
        className="max-w-md mx-auto h-full"
        style={{
          overlay: { padding: "6vw", zIndex: 100 }
        }}
      >
        <div className="h-full w-full bg-white pt-8 border-3 rounded-xl border-black relative">
          <div className="w-full flex justify-end absolute top-0 left-0">
            <button onClick={closeFilters} className={`btn text-lg font-medium btn-clear`}>✕</button>
          </div>
          <div className={`overflow-auto styled-scrollbar min-h-0 h-full w-full p-5 pt-0`}>
          {
            toggleCategory &&
            <div className="categories">
              <div className="flex items-baseline">
                <h2 className="text-lg font-body font-medium flex-1">
                  {`Filter by ${categoriesName}`}
                </h2>
              </div>
              <div className={`flex flex-wrap py-4`}>
                {allCategories.map(category => {
                  const isSelected = selectedCategories.includes(category.id)
                  return (
                    <CategoryButton 
                      name={category.name} 
                      key={category.name} 
                      category={category} 
                      isSelected={isSelected} 
                      toggleFilter={toggleCategory} 
                    />
                  )
                })}
              </div>
            </div>
          }

          {
            toggleFilter &&
            <div className="tags">
              <div className="flex items-baseline">
                <h2 className="text-lg font-body font-medium flex-1">
                  {`Filter by ${tagsName}`}
                </h2>
              </div>
              <div className={`flex flex-wrap py-4`}>
                {tags.map(tag => {
                  const isSelected = selectedTags.includes(tag.id)
                  return (
                    <TagButton key={tag.name} tag={tag} isSelected={isSelected} toggleFilter={toggleFilter} />
                  )
                })}
              </div>
            </div>
          }
          { (selectedTags?.length > 0 || selectedCategories?.length > 0) &&
            <div className="flex justify-between">
              <button onClick={reset} className="btn btn-clear text-red">Clear filters</button>
              <button onClick={closeFilters} className="btn btn-clear text-green">Done</button>
            </div>
          }
          </div>
        </div>
      </ReactModal>

    </div>
  )
}

export default MapFilter