/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react"
import axios from "axios";
import Layout from "./layout/Layout"
import Header from "./header/Header";
import Button from "./components/Button";


function App() {

  let [index, setIndex] = useState(0);
  let [data, setData] = useState([]);

  let clickHandler = () => {
    setIndex((old => {
      if(data.length - 1 > old) {
        return old + 1;
      }
      else {
        return old;
      }
    }));
  }


  useEffect(() => {
  

    axios.get('https://course.divinecoder.com/food/random/10')
    .then(res => {
      setData(res.data)
      console.log(res);

    })



  }, [index]);




  return (
  <>
    <Header/>
    <Button/>
    <Layout />

  </>
  )
}

export default App