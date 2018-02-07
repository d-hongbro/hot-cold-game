import React from 'react';

export default function GuessHistory(props) {
  const guesses = props.guessHistory.map((guess, index) => (
    <li key={index}>
      {guess}
    </li>
  ));

  return (
    <ul id="guessList" className="guessBox clearfix">
      {guesses}
    </ul>
  );
}