import React, { Component } from 'react';
class ClickCounter extends Component {
constructor(props) {
super(props);
this.state = {
count: 0
};
}
// Arrow function automatically binds 'this' to the component instance
handleClick = () => {
this.setState(prevState => ({
count: prevState.count + 1
}));
}
render() {
return (
<div>
<button onClick={this.handleClick}>
Click me
</button>
<p>Button Clicks: {this.state.count}</p>
</div>
);
}
}
export default ClickCounter;