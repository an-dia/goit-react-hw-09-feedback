import PropTypes from 'prop-types';

function Notification({ message }) {
  return <div>{message}</div>;
}

export default Notification;

Notification.propTypes = {
  message: PropTypes.string.isRequired,
};
