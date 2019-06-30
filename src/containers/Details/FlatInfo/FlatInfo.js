import React from 'react';
import classes from './FlatInfo.css'
import Features from './Features/Features';


const x = [
    (
        <div className={classes.divImg} >

        </div>
    ),
    (
        <div className={classes.divImg} >

        </div>
    ),
    (
        <div className={classes.divImg} >

        </div>
    )
]
    

const Images = (props) => {
    return (
        <div className={classes.flatImages}>
            <div className={classes.cascade}>
                {x.map((element, i) => (
                    <div key={i} className={classes.imgWrapper} style={{top: (2 - i) * 5,left:(2 - i) * 5}}>
                        {element}
                    </div>
                    
                ))}
            </div>
            <div className={classes.featuresbox}>
                <Features />
                <div className={classes.buttons}>
                    <button> BOOK NOW </button>
                    <button> SHEDULE VISIT </button>
                    <div className={classes.offers}>
                        <p> Show location on Map </p>
                        <p> Check offers % </p>
                        <p> Add to favorites </p>
                    </div>
                </div>
            </div>

        </div>

    );
}

export default Images;