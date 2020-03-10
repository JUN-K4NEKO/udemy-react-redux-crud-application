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
	const profiles = [
		{ name: "Taro", age: 10 },
		{ name: "Hanako", age: 12 },
		{ name: "NoName" }
	]
	return <div>
		{
			profiles.map((profile, index) => {
				return <User name={profile.name} age={profile.age} key={index}/>
			})
		}
	</div>
}
const User = (props) => {
	return <div>Hi, I am {props.name}, and I'm {props.age} years old!</div>
}

User.defaultProps = {
	age: 1
}

export default App;
