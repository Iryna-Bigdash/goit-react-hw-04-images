import { Component } from 'react';
import { LoadMore } from './Button.styled';

class LoadMoreBtn extends Component {
  render() {
    const { onClick } = this.props;

    return <LoadMore onClick={onClick}>Load More</LoadMore>;
  }
}

export default LoadMoreBtn;
