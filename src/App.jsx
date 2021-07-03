// import React from 'react'
// import ReactDOM from 'react-dom';
// import Pet from './pet';


// const App = () => {
//     return React.createElement("div", {}, [
//         React.createElement("h1", {}, "Adopt me"),
//         React.createElement(Pet, {
//             name: "Luna",
//             animal: "dog",
//             breed: "milk"
//         })

//     ])
// }
// ReactDOM.render(React.createElement(App), document.getElementById("root"));

// import { render } from 'react-dom'
// import Pet from './Pet'


import React from 'react'
import ReactDOM from 'react-dom';
import Pet from './pet';
import SearchParams from './SearchParams';

const App = () => {
    return (
        <div>
            <h1>Adopt Me!</h1>
            <Pet name="Luna" animal="dog" breed="milk" />
            <SearchParams />
        </div>
    )
}
// render(<App />, document.getElementById("root"));
ReactDOM.render(React.createElement(App), document.getElementById("root"));