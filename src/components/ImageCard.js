import React from 'react';
import { Link } from 'react-router-dom';
import imageDefault from './image-default.png';
import GenresLabel from './GenresLabel.js';

class ImageCard extends React.Component {

	render(){
		const { name, image, genres, id } = this.props.show;

		return (
			<div className="ui fluid card">
				<Link to={`/show/${id}`} id={id} >
					{image ? <img src={image.original} alt={name} /> : <img src={imageDefault} alt={name} /> }
					
					<div className="ui items" style={{ padding: '0 10px' }}>
						<h4 className="ui header">{name}</h4>
						<GenresLabel genres={genres} />
					 </div>
				</Link>
			</div>
		);
	}
}

export default ImageCard;