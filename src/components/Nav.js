import React from 'react';

const Nav = () => {
	return (
		<div className="ui secondary menu">
		  <a href="/" className="active item">
		    TVmaze
		  </a>
		 
		  <div className="right menu">
		    <div className="item">
		      <div className="ui icon input">
		        <input type="text" placeholder="Search" />
		        <i className="search link icon"></i>
		      </div>
		    </div>
		  </div>
		</div>
	);
};

export default Nav;