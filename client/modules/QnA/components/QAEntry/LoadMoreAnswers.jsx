import React from 'react';
import LinkTag from '../../../../components/LinkTag';

const LoadMoreAnswers = ({
  children, handleOnClick, size, href,
}) => (
  <div className="load-more-answer">
    <LinkTag
      handleOnClick={handleOnClick}
      size={size}
      href={href}
    >
      {children}
    </LinkTag>
  </div>
);

export default LoadMoreAnswers;
