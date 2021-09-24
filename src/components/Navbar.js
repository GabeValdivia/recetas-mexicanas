import React,{useState} from 'react';
import { Link } from 'gatsby';
import {FiAlignJustify} from 'react-icons/fi';
import logo from '../assets/images/logo.svg'

const Navbar = () => {
	const [show,setShow] = useState(false)
	return (
		<nav className="navbar">
			<div className="nav-center">
				<div className="nav-header">
					<Link to="/">
						<img src={logo} alt="recetas de mexico" />
					</Link>
					<button className="nav-btn" onClick={()=> setShow(!show)}>
						<FiAlignJustify />
					</button>
				</div>
				<div className={show ? "nav-links show-links":"nav-links"}>
					<Link className="nav-link" activeClassName="active-link" to="/"
					onClick={()=> setShow(false)}>home</Link>
					<Link className="nav-link" activeClassName="active-link" to="/recipes" onClick={()=> setShow(false)}>recipes</Link>
					<Link className="nav-link" activeClassName="active-link" to="/about" onClick={()=> setShow(false)}>about</Link>
					<Link className="nav-link" activeClassName="active-link" to="/tags" onClick={()=> setShow(false)}>tags</Link>
					<div className="nav-link contact-link">
						<Link to="/contact" className="btn" onClick={()=> setShow(false)}>contact</Link>
					</div>
				</div>
			</div>
		</nav>
	);
};

export default Navbar;
