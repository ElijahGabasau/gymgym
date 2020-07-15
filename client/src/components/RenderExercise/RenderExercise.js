import React from 'react';
import './RenderExercise.scss';

import Exercise from '../Exercise/Exercise.js';

class RenderExercise extends React.Component{

    render() {
        const renderExercise = [];

        for(let i = 0; i < this.props.data.length; i++){
            renderExercise.push(<Exercise key={'e' + i} 
                                          index={i} 
                                          isRemoveMode={this.props.isRemove} 
                                          pushTo={this.props.pushTo}
                                          spliceFrom={this.props.spliceFrom} 
                                          isCustomize={this.props.isCustomize} 
                                          data={this.props.data[i]} 
                                          activateRemove = {this.props.activateRemove}
                                />);
        };
        
        return(
            <div className='render-exercise'>
                {renderExercise}
            </div>
        )
    }
}

export default RenderExercise;