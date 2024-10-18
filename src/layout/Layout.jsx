import { useState } from "react"
import Header from "../header/Header"
import { useEffect } from "react";
import axios from "axios";
import Gallery from "../gallery/Gallery";


function Loading() {
    return (
        <div className="w-full min-h-[400px] flex justify-center items-center">
            <span className="loading loading-spinner loading-lg"></span>    
        </div> 
    )
}

function Layout() {

    let [data, setData] = useState([]);

    useEffect(() => {
        async function getData() {
            let galleryData = await axios.get('https://course.divinecoder.com/food/random/8');
            setData(galleryData.data);
        }
        getData();
    }, []);

    let ascendingHandler = () => {
      setData(item => {
        return item.toSorted((a, b) => a.name.localeCompare(b.name));
      })

      // setData(updateData);

    }

    let descendingHandler = () => {
      let updateData = data.toSorted((a, b) => b.name.localeCompare(a.name));
      setData(updateData);
    }

  return (
    <div className="w-full min-h-screen pt-6 pb-8 bg-slate-300">
      <div className="max-w-6xl p-5 pt-6 m-auto bg-white rounded shadow ">
        <Header onAscending={ascendingHandler} onDescending={descendingHandler} />

        {
            data.length == 0 
            ? 
            <Loading />
            : 
        
            <Gallery galleryItemsData={data} />
        }

      </div>
    </div>
  )
}

export default Layout