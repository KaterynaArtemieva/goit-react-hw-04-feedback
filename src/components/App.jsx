import { useState } from 'react';
import { Box } from './Box/Box.Styled';
import { StatisticsCard } from './StatisticsCard/StatisticsCard.styled';
import { FeedBack } from './FeedBack/FeedBack';
import { Statistics } from './Statistics/Statistics';
import { Notification } from './Notification/Notification';

export const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const clickFeedback = event => {
    const option = event.target.name;

    switch (option) {
      case 'good':
        setGood(prev => prev + 1);
        break;

      case 'neutral':
        setNeutral(prev => prev + 1);
        break;

      case 'bad':
        setBad(prev => prev + 1);
        break;

      default:
        break;
    }
  };

  const countTotalFeedback = () => {
    return good + neutral + bad;
  };

  const countPositiveFeedbackPercentage = () => {
    const allFeedback = countTotalFeedback();
    let result = 0;
    if (allFeedback > 0) {
      result = Math.round((good * 100) / allFeedback);
    }
    return result;
  };

  const btns = ['good', 'neutral', 'bad'];

  return (
    <Box>
      <StatisticsCard>
        <FeedBack
          title={'Please leave feedback'}
          btns={btns}
          onClickFeedback={clickFeedback}
        />
        {countTotalFeedback() > 0 ? (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={countTotalFeedback()}
            positivePercentage={countPositiveFeedbackPercentage()}
          />
        ) : (
          <Notification message="There is no feedback" />
        )}
      </StatisticsCard>
    </Box>
  );
};
