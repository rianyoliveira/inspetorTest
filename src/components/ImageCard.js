import React from 'react';

class ImageCard extends React.Component {

	render(){
		const { name, image, genres } = this.props.show;

		return (
			<div className="ui fluid card">
			<a href="/">
				{image && <img src={image.original} alt={name} />}
				<h4>{name}</h4>

				 <a href="/" className="ui basic label">{genres}</a>
			</a>
			</div>
		);
	}
}

export default ImageCard;