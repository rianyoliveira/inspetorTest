import React from 'react';
import '../css/ShowList.css';
import Nav from '../components/Nav';
import tvmaze from '../api/tvmaze';
import ShowCard from '../components/ShowCard';

class ShowList extends React.Component {
	
	constructor(props) {
		super(props);

		this.state = { shows: [] };
	}

	componentDidMount() {
		this.onSearchSubmit(this.props.history.location.state || 'girls');
	}

	onSearchSubmit = async (term) => {
		const response = await tvmaze.get('/search/shows',{
			params: { q: term }
		});

		this.setState({ shows: response.data });
	}

	showListRendered() {
		return this.state.shows.map((showData) => {
			return <ShowCard key={showData.show.id} show={showData.show} />
		});

	}

	render (){
		return (
			<div className="ui fluid container" style={{ marginTop: '10px' }}>
	  			<Nav onSubmit={this.onSearchSubmit} />
	  			<div className="show-list" style={{ margin: 'auto', maxWidth: '1133px'}}>{this.showListRendered()}</div>
			</div>
		);
	}
}


export default ShowList;