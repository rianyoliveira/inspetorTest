import React from 'react';

class SearchBar extends React.Component {
	state = {term: ''};

	onFormSubmit = (event) => {
		event.preventDefault();

		this.props.onSubmit(this.state.term);
	}

	render() {
		return (
				<form onSubmit={this.onFormSubmit} className="ui form">
					<div className="ui field">
					 <div className="ui icon input">
				        <input
				         	type="text"
				         	placeholder="Search" 
				         	value={this.state.term}
							onChange={e => this.setState({term: e.target.value})} 
				          />
				        <i className="search link icon"></i>
				      </div>
					</div>
				</form>
		);
	};
}

export default SearchBar;