import React from 'react';
import Nav from './components/Nav';
import Card from './components/Card';

class App extends React.Component {

	render(){
	  return (
	  	<div className="ui container" style={{ marginTop: '10px' }}>
	  		<Nav />
	  			<div className="ui three column grid">
					<Card title="Game of Thrones" genre="drama"/>
					<Card title="Shooter" genre="action"/>
					<Card title="Brooklin 99" genre="comedy"/>
				</div>	
	    </div>
	  );
	}
}

export default App;
