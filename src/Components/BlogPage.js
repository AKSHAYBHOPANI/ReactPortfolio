import React, { useState, useEffect } from 'react';

export default function BlogPage(blogData) {
	const [data,setData]=useState([]);
  // console.log(blogData);


	return (
		<>
		<h1>{blogData.blogData.title}</h1>
    {<div className="blogpage-cont">
		{
       

<div  key={blogData.blogData.id}>
<a href={blogData.blogData.link}>
  <div className="leftcolumn">
    <div className="blog-card">
      <h5>{blogData.blogData.date}</h5>
      <img src={blogData.blogData.img} width="100%" alt="blogs"/>
      <p>{blogData.blogData.body}</p>
      
    </div>
    </div></a>
    </div>
     
        	
     }
     </div>}
		</>
	);
}