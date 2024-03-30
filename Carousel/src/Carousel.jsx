import React, { useState } from 'react'
import './App.css'
import img1 from "./assets/download.jpeg"
import img2 from "./assets/images1.jpeg"
import img3 from "./assets/images2.jpeg"
import img4 from "./assets/images3.jpeg"
import img5 from "./assets/images.jpeg"

export const Carousel = () => {
    const [currentIndex,setCurrentIndex]=useState(0)
    const imgArray = [img1,img2,img3,img4,img5]
    const handlePrev=()=>{
        if(currentIndex===0){
            setCurrentIndex(imgArray.length-1)
        }
        else{
            setCurrentIndex(currentIndex-1)
        }
    }
    const handleNext=()=>{
        if(currentIndex===imgArray.length-1){
            setCurrentIndex(0)
        }
        else{
            setCurrentIndex(currentIndex+1)
        }
    }
  return (
    <div className='carousel_wrapper'>
        <button onClick={handlePrev}>Previous</button>
        <img src={imgArray[currentIndex]} alt="" />
        <button onClick={handleNext}>Next</button>
    </div>
  )
}
