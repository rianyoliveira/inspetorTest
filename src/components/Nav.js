import React from 'react';
import SearchBar from './SearchBar';

const Nav = (props) => {
	return (
		<div className="ui container" style={{ marginTop: '10px' }}>
			<div className="ui secondary menu" style={{  display: 'flex', alignItems: 'center'  }}>
			  <a href="/">
			    <img alt="logo" className="ui fluid image" src="https://static.tvmaze.com/images/tvm-header-logo.png" style={{ width: '200px', minWidth: '120px'}} />
			  </a>
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