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
			<div className="ui fluid container">
	  			<Nav onSubmit={this.onSearchSubmit} />
	  			{ this.state.shows.length === 0 ?
	  				<div className="ui container placeholder segment">
	  					<div className="ui icon header">
    						<i className="search icon"></i>
    						Não foram encontradas séries correspondentes com a sua pesquisa
  						</div>
  					</div> :
  					<div className="show-list list">{this.showListRendered()}</div>
	  			}
			</div>
		);
	}
}

export default ShowList;