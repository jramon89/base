import React, { Component, PropTypes } from 'react';

export default
class Layout extends Component{
	
	static propTypes = {
		title: PropTypes.string,
		children: PropTypes.object
	}

	render() {
		const { title, children } = this.props; 
		return(
			<section>
				<header>
					{title}
				</header>
				<article>
					{children}
				</article>
			</section>
		);
	}
}
