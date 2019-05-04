import React from 'react';
import '../css/ShowCard.css';
import { Link } from 'react-router-dom';
import imageDefault from './image-default.png';
import GenresLabel from './GenresLabel.js';

class ImageCard extends React.Component {

	constructor(props){
		super(props);

		this.state = { favorite: false };
	}

	addFavorite = () => {
		this.setState({ favorite: this.state.favorite === false ? true : false });
	}

	render(){
		const { name, image, genres, id } = this.props.show;

		return (
			<div className="ui fluid card">
				<div className={`ui right mini corner label ${ this.state.favorite ? 'teal' : ''}`} onClick={this.addFavorite}>
			    	<i className="heart icon"></i>
			    </div>
				<Link to={`/show/${id}`} id={id} >	
					<div className="image">
      					{image ? <img src={image.original} alt={name} /> : <img src={imageDefault} alt={name} /> }
      				</div>
				</Link>
				<div className="ui items">
					<Link to={`/show/${id}`} id={id} >	 
						<h3 className="ui header">{name}</h3>
						<div className="ui hidden divider"></div>
					</Link>
					<GenresLabel genres={genres} />	
				</div>
			</div>
		);
	}
}

export default ImageCard;