import React from 'react';
import './ShowList.css';
import Nav from '../components/Nav';
import tvmaze from '../api/tvmaze';
import ImageCard from '../components/ImageCard';

class ShowList extends React.Component {
	
	constructor(props) {
		super(props);

		this.state = { shows: [] };
	}

	componentDidMount() {
		this.onSearchSubmit('robot');
	}

	onSearchSubmit = async (term) => {
		const response = await tvmaze.get('/search/shows',{
			params: { q: term }
		});

		this.setState({ shows: response.data });
	}

	showListRendered() {
		return this.state.shows.map((showData) => {
			return <ImageCard key={showData.show.id} show={showData.show} />
		});

	}

	render (){
		return (
			<div className="ui container" style={{ marginTop: '10px' }}>
	  			<Nav onSubmit={this.onSearchSubmit} />
	  			<div className="show-list">{this.showListRendered()}</div>
			</div>
		);
	}
}


export default ShowList;