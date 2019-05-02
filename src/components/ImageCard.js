import React from 'react';
import imageDefault from './image-default.png';
import GenresLabel from './GenresLabel.js';

class ImageCard extends React.Component {

	render(){
		const { name, image, genres, id } = this.props.show;

		return (
			<div className="ui fluid card">
				<a href="/ShowDetails" id={id} style={{ color: 'teal' }} >
					{image ? <img src={image.original} alt={name} /> : <img src={imageDefault} alt={name} /> }
					<div className="ui items" style={{ padding: '0 10px' }}>
						<h4>{name}</h4>
						<GenresLabel genres={genres} />
					 </div>
				</a>
			</div>
		);
	}
}

export default ImageCard;