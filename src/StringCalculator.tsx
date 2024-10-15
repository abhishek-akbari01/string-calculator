import React, { useState } from 'react';
import './StringCalculator.css';
import { add } from './utils/add';

const StringCalculator = () => {
  const [input, setInput] = useState("");
  const [result, setResult] = useState<number | null>(null);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setResult(null);

    try {
      const sum = add(input);
      setResult(sum);
    } catch (err) {
      if (err instanceof Error) {
        setError(err.message);
      }
    }
  };

  return (
    <div className="container">
      <div className="calculator-box">
        <h1>String Calculator</h1>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="numbers">Enter comma-separated numbers:</label>
            <input
              id="numbers"
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="e.g. 1,2,3 or //;\n1;2"
              required
            />
          </div>
          <button type="submit" className="submit-btn">
            Calculate
          </button>
        </form>

        {result !== null && (
          <div className="result success">
            <p>Result: <strong>{result}</strong></p>
          </div>
        )}

        {error && (
          <div className="result error">
            <p>Error: {error}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default StringCalculator;
