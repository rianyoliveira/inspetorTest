import React from 'react';

const Card = (props) =>	{
	return (
		  <div className="column">

		    <div className="ui fluid card">
		      <a href="/" className="ui right corner label">
		        <i className="heart icon"></i>
		      </a>
		      <div className="image">
		        <img alt="poster" src="http://oyster.ignimgs.com/wordpress/stg.ign.com/2019/03/GoT8_KeyArt.jpg" />
		      </div>

		      <div className="content">
		        <a href="/" className="header">{props.title}</a>
		        
		        <a href="/" className="ui basic label">{props.genre}</a>

		      </div>
		    </div>

		  </div>
	);
};

export default Card;
