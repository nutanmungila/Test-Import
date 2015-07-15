// hello-world.jsx
 
import React from 'react';
 
class HelloWorld extends React.Component {
  render() {
    return (<p>Hello, Nutan!</p>);
  }
}
 
React.render(<HelloWorld/>,document.getElementById("div1"));
export default HelloWorld;
