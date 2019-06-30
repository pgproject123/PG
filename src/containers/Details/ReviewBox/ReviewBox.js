import React from 'react'
import classes from './ReviewBox.css'
import Review from './Review/Review';

const ReviewBox = (props) => (
    <div className={classes.reviewBox}>
        <h1> Reviews </h1>
        <div className={classes.reviewBody}>
            <Review />
            <Review />
            <Review />
            <Review />

        </div>
    </div>
)

export default ReviewBox;