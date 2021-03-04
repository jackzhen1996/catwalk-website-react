/* eslint-disable import/extensions */
import React, { useState } from 'react';
import Helpful from '../../../../components/Helpful';
import AddAnswer from './AddAnswer.jsx';
import { StyledSeperator } from './styles.js';

const QuestionInfo = ({ question }) => {
  const count = question.question_helpfulness;
  const [yesCount, setYesCount] = useState(count);
  const [yes, setYes] = useState(false);
  const handleOnClick = (e) => {
    e.preventDefault();
    if (!yes) {
      setYesCount((preYesCount) => preYesCount + 1);
      setYes(true);
    }
  };
  return (
    <>
      <div className="helpful-1">
        <Helpful
          helpfulness={yesCount}
          size={1}
          handleOnClick={handleOnClick}
        />
      </div>
      <StyledSeperator />
      <AddAnswer />
    </>
  );
};

export default QuestionInfo;
