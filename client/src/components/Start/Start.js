import React from 'react';

import './Start.scss';

class Start extends React.Component {
    render() {
        return(
            <div className='gym-start'>
                <h2 className='start-header'>Tired of picking exercises?</h2>
                <p>GymGym will randomly compose a workout programme according to your preferences.</p> 
                <p>If you feel something is missing you may add or remove an exercise.</p>
                <p>You may also want to sign in to save your progress</p>
                <img className='logo' src={require('./logo.png')} alt='logo' height='250' />
                <button onMouseDown={this.props.onNext}>Construct My Workout!</button>
            </div>
        )
    }
}

export default Start;