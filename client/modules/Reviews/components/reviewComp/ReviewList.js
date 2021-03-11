import React, { useState, useEffect } from 'react';
import { ReviewListContainer } from './styles.js';
import Tile from './Tile.js';
import AddReview from './AddReview.js';

const ReviewList = ({ data }) => (
  <ReviewListContainer id="reviewList">
    {
       data
        && data.map((product) => (
          <Tile
            id="reviews"
            helpfulness={product.helpfulness}
            date={product.date}
            user={product.reviewer_name}
            response={product.response}
            summary={product.summary}
            body={product.body}
            key={product.review_id}
            review_id={product.review_id}
            rating={product.rating}
            recommend={product.recommend}
            images={product.photos}
          />
        ))

    }
  </ReviewListContainer>
);

export default ReviewList;
