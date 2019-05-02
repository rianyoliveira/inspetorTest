import React from 'react';
import SearchBar from './SearchBar';

const Nav = (props) => {
	return (
		<div className="ui secondary menu">
		  <a href="/">
		    <img alt="logo" src="https://static.tvmaze.com/images/tvm-header-logo.png" />
		  </a>
		    <div className="right menu">
		    	<div className="item">
			   		<SearchBar onSubmit={props.onSubmit} />
			   	</div>
		    </div>
		</div>
	);
};

export default Nav;