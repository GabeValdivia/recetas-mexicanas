import React from 'react';
import Layout from '../components/Layout';
import {page, text} from '../examples/home.module.css'

export default function Home() {
	return (
		<Layout>
			<div className={page}>
				<h1>Homepage</h1>
				<h1>Heading 2</h1>
				<p>Consectetur varius varius urna eu arcu commodo orci elementum maximus ex eget nisi aliquam nunc pellentesque nisl cursus interdum sed lorem sem molestie vivamus euismod.</p>

				<p className={text}>Varius suspendisse quis sed scelerisque lacus sollicitudin cursus hendrerit felis sollicitudin eros orci dolor nec lacus a portaest orci quam placerat dolor nec sit portaest.</p>
			</div>
		</Layout>
	);
}
