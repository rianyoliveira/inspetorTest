import React from 'react';
import Nav from './Nav';
import tvmaze from '../api/tvmaze';


const ShowDetails = props => {
	return (
		<div className="ui container" style={{ marginTop: '10px' }}>
	  		<Nav onSubmit={this.onSearchSubmit} />
	  		<div className="ui segment">
	  			serie detalhada
	  		</div>
		</div>
	);
}

export default ShowDetails;