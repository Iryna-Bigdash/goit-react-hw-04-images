import PropTypes from 'prop-types';
import { LoaderContainer } from './Loader.styled';
import { RotatingLines } from 'react-loader-spinner';

const Loader = () => {
  return (
    <LoaderContainer>
      <RotatingLines
        strokeColor="blue"
        strokeWidth="5"
        animationDuration="0.75"
        width="96"
        visible={true}
      />
    </LoaderContainer>
  );
};

export default Loader;

Loader.protoType = {
  onClick: PropTypes.func.isRequired,
};
