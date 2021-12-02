import React, { useState, useEffect } from 'react';
import SimpleImageSlider from "react-simple-image-slider";

export default function Carousal() {

const [data,setData]=useState([]);

const images = [
  { url: "./Slider/1.jpg" },
  { url: "./Slider/2.jpg" },
  { url: "./Slider/3.png" },
];

const getData=()=>{
    fetch('carousal.json'
    ,{
      headers : { 
        'Content-Type': 'application/json',
        'Accept': 'application/json'
       }
    }
    )
      .then(function(response){
       
        return response.json();
      })
      .then(function(myJson) {
    
        setData(myJson)
      });
  }
  useEffect(()=>{
    getData();
//     var slideIndex = 0;
// showSlides();

// function showSlides() {
//   var i;
//   var slides = document.getElementsByClassName("mySlides");
//   for (i = 0; i < slides.length; i++) {
//     slides[i].style.display = "none";
//   }
//   slideIndex++;
//   if (slideIndex > slides.length) {slideIndex = 1}
//   slides[slideIndex-1].style.display = "block";
//   setTimeout(showSlides, 3000); // Change image every 2 seconds
//}
    
  },[])

	
	return (
		<>
<h1>Highlights</h1>	
<SimpleImageSlider
        width={"100vw"}
        height={"50vw"}
        images={images}
        showBullets={true}
        showNavs={true}
        autoPlay={true}
      />  
		</>
	);
}