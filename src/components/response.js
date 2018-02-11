import React from 'react';

export default function GuessCount(props) {
    const isPlural = props.guessCount !== 1;
  //  const guessNoun = isPlural ? 'guesses' : 'guess';

    return (
        <h2 id="guessCount">
            Guess #<span id="count">{props.guessCount + 1}</span>!
        </h2>
    );
}