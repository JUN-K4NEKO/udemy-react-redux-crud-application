import React, { Component } from 'react'; // must import React to use JSX 

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

class App extends Component {
	render() {
    return (
      <React.Fragment>
        <label htmlFor="bar">bar</label>
        <input id="bar" type="text" onClick={() => { console.log("I am clicked.") }} />
      </React.Fragment>
    )
	}
}

export default App;
