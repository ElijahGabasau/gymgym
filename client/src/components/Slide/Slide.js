import React from 'react';
import './Slide.scss';

function Slide(props) {

    const currentExercise = props.currentExercise;
    const numberExercise = props.number;
    const data = props.data;
    const currentSet = props.currentSet

    return(
        <div className={`slide ${props.isOn? 'isOn' : 'isOff'} ${currentExercise - 0 === numberExercise - 0? '' : 'slide__collapsed'}`}> 
            <div className='slide__container slide__container__prev' onMouseDown={props.decrement}></div>
            <div className='slide__content'>
                <div className='slide-canvas'>
                    <p className='slide-canvas__uptitle'>Exercise {numberExercise + 1}:</p>
                    <h2 className='slide-canvas__title'>{data.name}</h2>

                    <div className='slide__counter'>
                        <p className='slide__counter--times'>{data.times}<span>x</span></p>
                        <div className='slide__counter--sets'>{currentSet}/{data.sets}</div>
                    </div>
                </div>
            </div>

            <div className='slide__container slide__container__next' onMouseDown={props.increment}></div>
        </div>
    )
}

export default Slide;