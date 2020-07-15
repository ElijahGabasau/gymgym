import React from 'react';
import './RenderDifficulty.scss';


function RenderDifficulty(props){
    const difficulty = props.difficulty;
    const index = props.index;
    const component = props.component? props.component : 'e';
    const style = {
        width: props.size? props.size + 'rem' : '1rem',
        height: props.size? props.size + 'rem' : '1rem'
    }
    const render = [];

    for (let i = 0; i < 5; i++){
        if(i < difficulty) {
            render.push(<div key={index + component + i} className='render-difficulty__filled' style={style} ></div>);
        }else{
            render.push(<div key={index + component + i} className='render-difficulty__blank' style={style} ></div>);
        }
    }

    return(
      <div className='render-difficulty'>
        {render}
      </div>
    );
}

export default RenderDifficulty;