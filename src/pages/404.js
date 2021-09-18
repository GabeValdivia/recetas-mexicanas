import React from 'react';
import { Link } from 'gatsby';
import Navbar from './components/Navbar';

const Error = () => {
	return (
		<div>
			<Navbar />
			<h1>Oh, snap! That page doesn't exist.</h1>
		</div>
	);
};

export default Error;
