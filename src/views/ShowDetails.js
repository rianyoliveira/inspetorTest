import React from 'react';
import Nav from '../components/Nav';
import GenresLabel from '../components/GenresLabel';
import tvmaze from '../api/tvmaze';
import imageDefault from '../components/image-default.png';

class ShowDetails extends React.Component {

	constructor(props) {
		super(props);

		this.state = { showInformation: [] }; 
	}
	
	componentDidMount() {
		this.fetchShow();
	}

	fetchShow = async (id) => {
		const response = await tvmaze.get('/shows/' + this.props.match.params.id);

		this.setState({ showInformation: response.data });
	}


	onSearchSubmit = async (term) => {
		this.props.history.push('/', term);
	}

	dateToBR(date) {	
		return date.split('-').reverse().join('/');
	}

	summaryText() {
		return {__html: this.state.showInformation.summary };
	}

	render(){
		const { image, name, summary, premiered, genres } = this.state.showInformation;

		return (
			<div className="ui container" style={{ marginTop: '10px' }}>
		  		<Nav onSubmit={this.onSearchSubmit} />

		  		<div className="ui segment">
		  			<div className="ui stackable items">
					  <div className="item">
					    <div className="ui image medium left floated">
					        { image ? <img src={image.original} alt={name} /> : <img src={imageDefault} alt={name} /> }
					    </div>
					    <div className="content">
					      <div className="ui huge header">{name}</div><br />
					      <div className="ui sub header">Data de Lançamento: {premiered ? this.dateToBR(premiered) : '' }</div>
			
						<div style={{ marginBottom: '20px', 'marginTop': '20px' }}>
					       <h5 className="ui gray dividing header">Sinopse </h5>
					      <div className="description">
					       { summary ? <div dangerouslySetInnerHTML={this.summaryText()} /> : '' }
					      </div>
					     </div>
					      <div className="extra">
					         {genres ? <GenresLabel genres={genres} /> : ''}
					      </div>
					    </div>
					  </div>
					 </div>
		  		</div>
			</div>
		);
	}
}

export default ShowDetails;