import PropTypes from 'prop-types';
import { LoaderContainer } from './Loader.styled';
import { RotatingLines } from 'react-loader-spinner';

export default function Loader(){
  return (
    <LoaderContainer>
      <RotatingLines
        strokeColor="rgba(102, 51, 153, 0.6)"
        strokeWidth="5"
        animationDuration="0.75"
        width="56"
        visible={true}
      />
    </LoaderContainer>
  );
};
Loader.protoType = {
  onClick: PropTypes.func.isRequired,
};
