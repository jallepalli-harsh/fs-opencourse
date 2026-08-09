import { useState } from "react";

const Header = ({ text }) => <h2>{text}</h2>;

const Button = ({ text, onClick }) => (
  <button type="button" onClick={onClick}>
    {text}
  </button>
);

const Statistics = ({ goodCount, neutralCount, badCount }) => {
  const totalCount = goodCount + badCount + neutralCount;
  const average = (goodCount - badCount) / (totalCount || 1);
  const positive = (goodCount / (totalCount || 1)) * 100;

  return (
    <>
      <Header text="statistics" />
      <div>
        <p>good: {goodCount}</p>
        <p>neutral: {neutralCount}</p>
        <p>bad: {badCount}</p>
        <p>all: {totalCount}</p>
        <p>average: {average}</p>
        <p>positive: {positive} %</p>
      </div>
    </>
  );
};

function App() {
  const [goodCount, setGoodCount] = useState(0);
  const [badCount, setBadCount] = useState(0);
  const [neutralCount, setNeutralCount] = useState(0);

  const incrementGoodCountByOne = () => setGoodCount((p) => p + 1);

  const incrementNeutralCountByOne = () => setNeutralCount((p) => p + 1);

  const incrementBadCountByOne = () => setBadCount((p) => p + 1);

  return (
    <>
      <Header text="give feedback" />
      <Button text="good" onClick={incrementGoodCountByOne} />
      <Button text="neutral" onClick={incrementNeutralCountByOne} />
      <Button text="bad" onClick={incrementBadCountByOne} />
      <Statistics
        goodCount={goodCount}
        badCount={badCount}
        neutralCount={neutralCount}
      />
    </>
  );
}

export default App;
