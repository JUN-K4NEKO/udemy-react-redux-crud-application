import React from 'react'; // must import React to use JSX 

// class App extends Component {
// 	render() {
// 		return <div>Hello World</div>;
// 	}
// }

// without JSX
// class App extends Component {
// 	render() {
// 		return React.createElement(
// 			"div", 
// 			null,
// 			"Hello World!"
// 		);
// 	}
// }

// class App extends Component {
// 	render() {
//     return (
//       <React.Fragment>
//         <label htmlFor="bar">bar</label>
//         <input id="bar" type="text" onClick={() => { console.log("I am clicked.") }} />
//       </React.Fragment>
//     )
// 	}
// }

const App = () => {
	return <div>
		<Cat />
		<Cat />
		<Cat />
		<Cat />
	</div>
}
const Cat = () => {
	return <div>Meow!</div>
}

export default App;
