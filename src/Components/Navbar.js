export default function Navbar() {
	return (

<header className="header">
  <a href="" className="logo">Akshay Bhopani</a>
  <input className="menu-btn" type="checkbox" id="menu-btn" />
  <label className="menu-icon" htmlFor="menu-btn"><span className="navicon"></span></label>
  <ul className="menu">
    <li><a href="./Resume.pdf">Resume</a></li>
    <li><a href="#Blog">Blog</a></li>
    <li><a href="mailto:akshaybhopani@gmail.com">Contact</a></li>
  </ul>
</header>

	)
}