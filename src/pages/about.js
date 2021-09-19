import React from 'react';
import Layout from '../components/Layout';
import {page, text} from '../examples/about.module.css'

const about = () => {
	return (
		<Layout>
			<div className={page}>
				<h1>About Page</h1>
				<h1>Welcome to Codefuzed!</h1>
				<p className={text}>Diam ac dolor euismod tempus magna sollicitudin ipsum maximus nunc vivamus purus enim aliquam proin urna hendrerit commodo arcu lacus proin et arcu mi erat diam ex tincidunt consectetur consectetur lorem rutrum elit portaest eros congue nisl tempus massa vivamus mi ipsum condimentum sem ut.</p>
			</div>
		</Layout>
	);
};

export default about;
