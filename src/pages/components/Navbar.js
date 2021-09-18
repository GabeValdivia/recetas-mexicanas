import React from 'react';
import { Link } from 'gatsby';

const Navbar = () => {
	return (
		<nav>
			<ul>
				<li>
					<Link to="/">Home</Link>
				</li>
				<li>
					<Link to="/contact">Contact</Link>
				</li>
				<li>
					<Link to="/about">About</Link>
					<ul>
						<li>
							<Link to="/company/history">Our History</Link>
						</li>
					</ul>
				</li>
			</ul>
		</nav>
	);
};

export default Navbar;
