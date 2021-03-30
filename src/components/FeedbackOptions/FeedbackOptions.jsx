import PropTypes from 'prop-types';
import s from './FeedbackOptions.module.css';

function FeedbackOptions({ options, onLeaveFeedback }) {
  return (
    <>
      {options.map(option => (
        <button
          key={option}
          className={s.button}
          type="button"
          id={option}
          onClick={onLeaveFeedback}
        >
          {option[0].toUpperCase() + option.substring(1)}
        </button>
      ))}
    </>
  );
}

FeedbackOptions.propTypes = {
  onLeaveFeedback: PropTypes.func.isRequired,
};

export default FeedbackOptions;
