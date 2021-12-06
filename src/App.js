import React, { useState } from 'react';
import JSONDATA from './MOCK_DATA.json';
import './App.css';

const App = () => {

	const [search, setSearch] = useState("");

	return (
		<div className="App">
			<input onChange={event => {setSearch(event.target.value)}} className="Input" type="text" placeholder="Search ..." />
			{ JSONDATA.filter((value) => {
				if (search == "") {
					return value;
				} else if (value.first_name.toLocaleLowerCase().includes(search.toLocaleLowerCase())) {
					return value;
				}
			}).map((value, key) => {
				return(
					<div key={key}>
						<p className="Item">{ value.first_name }</p> 
					</div>
				)
			}) }
		</div>
	);
}

export default App;