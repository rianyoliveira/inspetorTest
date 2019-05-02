import React from 'react';
import tvmaze from './api/tvmaze';
import Nav from './components/Nav';
import ShowList from './components/ShowList';

class App extends React.Component {

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

	render(){
	  return (
	  	<div className="ui container" style={{ marginTop: '10px' }}>
	  		<Nav onSubmit={this.onSearchSubmit} />
				<ShowList shows={this.state.shows} />
		</div>
	  );
	}
}

export default App;
