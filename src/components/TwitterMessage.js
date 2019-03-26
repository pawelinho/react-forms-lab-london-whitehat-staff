import React from "react";

class TwitterMessage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      value: '',
      char: this.props.maxChars
    };
  }

  handleChange = (event) => {
  let length = 140 - event.target.value.length
  
    this.setState({
      value: event.target.value,
      char: length
    })
    
  }

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input type="text" value={this.state.value} onChange={this.handleChange}/>
        {this.state.char}
      </div>
    );
  }
}

export default TwitterMessage;
