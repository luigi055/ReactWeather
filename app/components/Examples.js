import React from 'react';
import { Link } from 'react-router';

const Examples = props => {
	return (
		<div>
			<h1 className="text-center">Examples!</h1>;
			<p>Here are a few locations to try out</p>
			<ol>
				<li>
					<Link to="/?location=san%20carlos">San Carlos</Link>
				</li>
				<li>
					<Link to="/?location=rio">Rio, Brazil</Link>
				</li>
			</ol>
		</div>
	);

};

export default Examples;
