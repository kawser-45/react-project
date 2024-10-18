/* eslint-disable react/prop-types */
import Button from "../components/Button"


function GalleryItem(props) {

    let {image, name, category_name} = props.galleryItemData;

  return (
    <div className="border ">
        <img className="object-cover w-full h-60" src={image} alt="my image" />
        <h3 className="p-2 text-2xl font-bold">{name.toUpperCase()}</h3>
        <span className="block pl-2 font-bold">{category_name}</span>
        <Button className="inline-block px-8 py-3 mt-3 mb-6 ml-2 bg-green-600 hover:bg-gray-400">Click Now</Button>
    </div>
  )
}

export default GalleryItem