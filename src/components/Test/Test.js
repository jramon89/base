import React, { Component, PrpTypes } from 'react';
import Layout from '../Layout/Layout';

export default
class Test extends Component{

	render() {
		const { title, children } = this.props; 
		return(
			<Layout
				title="Test">
				<h1>
					Test
				</h1>				
			</Layout>
		);
	}
}