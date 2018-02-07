import React from 'react';

export default class UserInput extends React.Component {
	constructor(props) {
		super(props);
  }
		onSubmit(event) {
			event.preventDefault();
			const text = this.input.value;
			if (text && this.props.setRecentGuess) {
				console.log('entered');
				this.props.setRecentGuess(text);
			}
			this.input.value = '';
		}



render() {
	return (
		<form className="userInput" onSubmit={(e) => this.onSubmit(e)}>
			<input id="input" type="number" min={0} max={100}
			ref={input => (this.input = input)} />

			<button>Guess</button>
		</form>
	);
}
}