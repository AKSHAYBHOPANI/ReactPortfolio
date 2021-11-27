import React, { useState, useEffect } from 'react';

export default function Blog({showBlog, setshowBlog, blogData, setblogData}) {
	const [data,setData]=useState([]);


const getData=()=>{
    fetch('blogs.json'
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
		<h1>Blog</h1>
    <div className="blog-cont" id="Blog">
		{
        data.map((item)=>

<div className="row" key={item.id}>
<a onClick={() => {
  setshowBlog(true);
  // console.log(item);
  setblogData(item);
}}>
  <div className="leftcolumn">
    <div className="blog-card">
      <h2>{item.title}</h2>
      <h5>{item.date}</h5>
      <img src={item.img} width="100%" alt="blogs"/>
      <p>{item.desc}</p>
      
    </div>
    </div></a>
    </div>
     
        	)
     }
     </div>
		</>
	);
}