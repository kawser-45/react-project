/* eslint-disable react/prop-types */
import GalleryItem from "./GalleryItem"


function Gallery(props) {
  return (
    <div className="grid grid-cols-4 grid-rows-2 gap-3 mt-8">
        {props.galleryItemsData.map(item => <GalleryItem key={item.id} galleryItemData={item} />)}
    </div>
  )
}

export default Gallery