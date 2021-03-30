import React, { useState } from 'react';
import Container from './components/Container/Container';
import FeedbackOptions from './components/FeedbackOptions/FeedbackOptions';
import Section from './components/Section/Section';
import Statistics from './components/Statistics/Statistics';
import Notification from './components/Notification/Notification';

const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

const countTotalFeedback = () => {
    const total = good + neutral + bad;
    return total;
};
  
const countPositiveFeedbackPercentage = () => {
    const total = countTotalFeedback();
    const percentage = (good * 100) / total;
    if (!good) {
      return 0;
    }
    return Math.round(percentage);
};
  
  const handleLeaveFeedback = e => {
    const { id } = e.target;
    switch (id) {
      case 'good':
        setGood(prevGood => prevGood + 1);
        break;
      case 'neutral':
        setNeutral(prevNeutral => prevNeutral + 1);
        break;
      case 'bad':
        setBad(prevBad => prevBad + 1);
        break;
      default:
        console.warn('There is no such feedback.');
    }
  };
  

    const total = countTotalFeedback();
    const positivePercentage = countPositiveFeedbackPercentage();
    const objKey = Object.keys({good, neutral, bad});

  return (
      <Container>
        <Section title="Please leave feedback">
          <FeedbackOptions
            options={objKey}
            onLeaveFeedback={handleLeaveFeedback}
          />
        </Section>
        <Section title="Statistics">
          {total > 0 ? (
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={total}
              positivePercentage={positivePercentage}
            ></Statistics>
          ) : (
            <Notification message="No feedback given" />
          )}
        </Section>
      </Container>
  );
};

export default App;

