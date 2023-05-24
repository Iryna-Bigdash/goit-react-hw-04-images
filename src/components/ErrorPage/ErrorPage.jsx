import PropTypes from 'prop-types';
import { NotificationText } from './ErrorRage.styled';

const ErrorPage = ({ error }) => {
  return <NotificationText>{error}</NotificationText>;
};

export default ErrorPage;

ErrorPage.protoType = {
  error: PropTypes.string.isRequired,
};
