import React, { useState, useEffect } from 'react';

export default function Projects() {

const [data,setData]=useState([]);

const getData=()=>{
    fetch('projects.json'
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
    getData()
  },[])


	return (
		<>
		<h1>Projects</h1>
    <div className="card-cont">
		{
        data.map((item)=>
 <div className="card" key={item.id}>
 <a href={item.link}>
  <div className="container">
    <h4><b>{item.name}</b></h4>
    <img width="100%" src={item.img} alt="Projects"/>
    <p>{item.desc}</p>
  </div>
</a>
</div>
     
        	)
     }
     </div>
		</>
	);
}