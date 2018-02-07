import React from 'react';
import Response from './response';
import UserInput from './userInput';
import Feedback from './feedback';
import GuessHistory from './guessHistory';

export default class Game extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			targetNumber: Math.round(Math.random()*100)+1,
			recentGuess: 0,
			guessHistory: [],
			feedback: 'Make your guess!'
		}
	}

	setRecentGuess(recentGuess) {
		console.log({function: 'setRecentGuess in card', value: recentGuess});
		recentGuess = parseInt(recentGuess, 10);
    if (isNaN(recentGuess)) {
      this.setState({ feedback: 'Please enter a valid number' });
      return;
    }

	  const difference = Math.abs(recentGuess - this.state.targetNumber);

    let feedback;
    if (difference >= 50) {
      feedback = 'You\'re Ice Cold...';
    } else if (difference >= 30) {
      feedback = 'You\'re Cold...';
    } else if (difference >= 10) {
      feedback = 'You\'re Warm.';
    } else if (difference >= 1) {
      feedback = 'You\'re Hot!';
    } else {
      feedback = 'You got it!';
    }

		this.setState({
			feedback,
			guessHistory: [...this.state.guessHistory, recentGuess]
		});
	}

	render() {
    const { feedback, guessHistory } = this.state;
    const guessCount = guessHistory.length;

		return (
			<div>
				<Feedback feedback={feedback} guessCount={guessCount} /> 
				<UserInput id="userInput" min={0} max={100} 
					value={this.state.recentGuess}
					setRecentGuess={value => this.setRecentGuess(value)} />
				<Response guessCount={guessCount} />
				<GuessHistory guessHistory={guessHistory}/>
			</div>
		);
	}





}