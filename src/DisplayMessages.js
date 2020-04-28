class DisplayMessages extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: '',
      messages: []
    }
    this.handleChange = this.handleChange.bind(this);
    this.submitMessage = this.submitMessage.bind(this);
  }
  // add handleChange() and submitMessage() methods here
  handleChange(event) {
    this.setState({
      input: event.target.value
    });
  }
  submitMessage() {
    const currentMessage = this.state.input;
      if (currentMessage.trim() != '') {
      this.setState({
        input: '',
        messages: this.state.messages.concat(currentMessage)
      });
    }
  }
  render() {
    return (
      <div>
        <h2>Type in a new Message:</h2>
        { /* render an input, button, and ul here */ }
        <input value={this.state.input} onChange={this.handleChange} />
        <button onClick={this.submitMessage}>SUBMIT</button>
        <ul>
          {this.state.messages.map( (message, idx) => {
              return (
                 <li key={idx}>{message}</li>
              )
            })
          }
        </ul>
        { /* change code above this line */ }
      </div>
    );
  }
};
