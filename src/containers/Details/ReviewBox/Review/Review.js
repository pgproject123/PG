import React from 'react'
import classes from './Review.css'

const Review = (props) => (
    <div className={classes.review}>
        <div className={classes.userRating}>
            <p> User </p>
            <p> Rating :- 5/5 </p>
        </div>
        <div className={classes.reviewContent}>
            <p>
                A paragraph is a self-contained unit of a discourse in writing dealing
                with a particular point or idea. A paragraph consists of one or more sentences.
                Though not required by the syntax of any language, paragraphs are usually an
                expected part of formal writing, used to organize longer prose.
        </p>
        </div>

    </div>

);

export default Review;