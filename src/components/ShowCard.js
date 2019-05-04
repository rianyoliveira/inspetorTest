import React from 'react';
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
				<div className="ui items" style={{ padding: '0 10px' }}>
					<Link to={`/show/${id}`} id={id} >	 
						<h4 className="ui header">{name}</h4>
						<GenresLabel genres={genres} />
					</Link>
				</div>
			</div>
		);
	}
}

export default ImageCard;