import React from 'react';
import './Exercise.scss';
import Collapse from '@kunukn/react-collapse';
import RenderDifficulty from '../RenderDifficulty/RenderDifficulty.js';

class Exercise extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            'isCollapsed': true,
            'isRemove': false
        }

        this.toggleExerciseState = this.toggleExerciseState.bind(this);
        this.handleRemove = this.handleRemove.bind(this);
    }

    UNSAFE_componentWillUpdate(nextProps, nextState){
        if(!nextProps.isRemoveMode){
            nextState.isRemove = false;
        }
        if(nextState.isRemove){
            nextState.isCollapsed = true;
        }
    }

    toggleExerciseState(name){
        const currentValue = this.state[name];
        const newValue = !currentValue;
    
        const newState = {};
        newState[name] = newValue;
    
        this.setState(newState);
    }

    handleRemove() {
        const toggledState = !this.state.isRemove;
        this.toggleExerciseState('isRemove'); 
        this.props.activateRemove();
        
        if(toggledState){
            this.props.pushTo(this.props.data.id, 'remove');
        }else{
            this.props.spliceFrom(this.props.data.id, 'remove');
        }

        this.setState({
            isCollapsed: true,
        });
    }


    render() {
        const isCollapsed = this.state.isCollapsed;
        const data = this.props.data;

        const muscules = [];
        data.muscules.forEach((muscule, index)=>{
            if(index === data.muscules.length - 1){
                muscules.push(muscule);
                return;
            }
            muscules.push(muscule + ', ');
        });

        return(
            <div className={`exercise ${this.state.isRemove? 'exercise__remove' : ''}`} onMouseDown={this.state.isRemove? undefined :()=>{this.toggleExerciseState('isCollapsed')}}>
                <div className='exercise-menu'>
                    {this.props.isCustomize &&
                        <div className={`exercise-menu__container ${this.state.isRemove? 'exercise-menu__container--active' : ''}`} onMouseDown={this.handleRemove}>
                            {this.state.isRemove
                                ? <img className='exercise-menu__cancel-bin' src={require('./cancel-bin.png')} alt='cancel-remove' />
                                : <img className='exercise-menu__bin' src={require('./bin.png')} alt='remove'/>
                            }
                        </div>
                    }
                    {/*this.props.isCustomize &&
                        <div className='exercise-menu__container'>
                            <img className='exercise-menu__pen' src={require('./pen.png')} alt='redact' />
                        </div>
                    */}
                    <div className={`exercise-menu__container ${this.state.isCollapsed? '' : 'exercise-menu__container--active'}`}>
                        {isCollapsed
                            ? <div className='exercise-menu__arrow'></div>
                            : <div className='exercise-menu__collapse'></div>
                        }
                    </div>
                </div>
                <div className='title'>
                    <h3>Excercise {this.props.index + 1}</h3>
                    <h4>{data.name}</h4>
                </div>
                <div className='exercise__row'>
                    <div className='counter'>
                        {isCollapsed
                            ? <div className='counter__collapse' >
                                <p><span className='counter__highlighted'>{data.times}/{data.sets}</span></p>
                            </div>
                            : <div className='counter__collapse' >
                                <p><span className='counter__highlighted'>{data.times}</span> Times</p>
                                <p><span className='counter__highlighted'>{data.sets}</span> Sets</p>
                              </div>
                        }
                    </div>
                    <div className='difficulty'>
                        <div className='difficulty__row'>
                            <h3>Difficulty</h3>
                            <RenderDifficulty difficulty={data.difficulty} index={this.props.index} />
                        </div>
                        <div className='difficulty__calory'>
                            <p>{data.calories * data.times} calories per 1 set</p>
                        </div>
                    </div>
                </div>
                <Collapse  isOpen={isCollapsed? false : true} transition="height 300ms cubic-bezier(.4, 0, .2, 1)">
                    <div className='extra'>
                        <div className='exercise__block'>
                            <h4>Muscules inovolved</h4>
                            <p className='exercise__muscules'>{muscules}</p>
                        </div>
                        <div className='exercise__block'>
                            <h4>Description</h4>
                            <p>{data.description}</p>
                        </div>
                        <div className='video-frame'>
                            {/*<iframe 
                                width='100%'
                                src={data.video} 
                                frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" 
                            allowFullScreen></iframe>*/}
                        </div>
                    </div>
                </Collapse>
            </div>
        )
    }
}

export default Exercise;