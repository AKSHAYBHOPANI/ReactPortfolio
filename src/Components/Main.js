import {useState} from 'react';
import Carousal from "./Carousal";
import Projects from "./Projects";
import Blog from "./Blog";
import BlogPage from './BlogPage';

export default function Main() {
const [showBlog,setshowBlog] = useState(false);
const [blogData, setblogData] = useState([]);

	return (
		<div className="Main">
		{!showBlog ? (
			<div>
		<Carousal/>
		<Projects/>
		<Blog showBlog={showBlog} setshowBlog={setshowBlog} blogData={blogData} setblogData={setblogData}/>
		</div>
		) : (
		<BlogPage blogData={blogData}/>
		)}
		</div>
	);
}