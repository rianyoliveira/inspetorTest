import React from 'react';
import '../css/Nav.css';
import { Link } from 'react-router-dom';
import SearchBar from './SearchBar';

const Nav = props => {
	return (
		<div className="ui container">
			<div className="ui secondary menu">
			 	<Link to="/">
				    <img 
				    	alt="logo"
				    	className="ui fluid image"
				    	src="https://static.tvmaze.com/images/tvm-header-logo.png"
				    />
			  	</Link>
			    <div className="right menu">
			    	<div className="ui item">
				   		<SearchBar onSubmit={props.onSubmit} />
				   	</div>
			    </div>
			</div>
		</div>
	);
};

export default Nav;