import React from 'react';
import './ShowList.css';
import ImageCard from './ImageCard';

const ShowList = (props) => {

	const shows = props.shows.map((showData) => {
		return <ImageCard key={showData.show.id} show={showData.show} />
	})

	return <div className="show-list">{shows}</div>;
}

export default ShowList;