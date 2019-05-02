import React from 'react';

const GenresLabel = (props) => {

	const genres = props.genres.map((genre) =>{
		return <div key={genre} className="ui teal basic label">{genre}</div>
	})

	return <div>{genres}</div>
}

export default GenresLabel;