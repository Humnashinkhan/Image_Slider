import React, { useEffect, useState } from 'react'
import './Slider.css'
import img1 from '../assets/images/img1.jpg';
import img2 from '../assets/images/img2.jpeg';
import img3 from '../assets/images/img3.jpg';
import img4 from '../assets/images/img4.jpg';
import img5 from '../assets/images/img5.jpg';


const Slider = () => {
const[slider, setSlider] = useState(0);
const data = [img1, img2, img3, img4, img5]
  
    
const HandlePlus = () =>{
     setSlider(slider===data.length-1?0:slider+1)
    }
   
 const HandleMinus = () =>{
    setSlider(slider===0 ? data.length-1:slider-1)

   }
     useEffect(() =>{
        const sliderClear = setInterval(() =>{
            HandlePlus()
        },2000)

        return() => clearInterval(sliderClear)
     },[slider])

  return (

    <div className='Slider'>
            <div className="Slider_img">
            <img src={data[slider]} alt=''style={{ width:"100%",height:"80vh"}}
              className='hidden'/>
            <div className='btn'>
              <button onClick={HandleMinus}>-</button>
              <button onClick={HandlePlus}>+</button>
           </div>
           </div>
           
         

        
    
    
        </div>
  )
}

export default Slider