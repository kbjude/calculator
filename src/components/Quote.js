import React, { useState, useEffect } from 'react';
import quotes from '../Quotes.json';

const Quote = () => {
  const randomNumber = Math.round(Math.random() * 20);
  const [quote, setQuote] = useState('Beautiful quotes');
  useEffect(() => {
    setQuote(quotes[randomNumber]);
  }, []);
  return (
    <>
      <div data-testid="quote" className="quote">{quote}</div>
    </>
  );
};

export default Quote;
