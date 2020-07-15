import React from 'react';
import './Workout.scss';

import Timer from '../Timer/Timer.js';
import Slide from '../Slide/Slide.js';
import Summarly from '../Summarly/Summarly.js';

class Workout extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            isOn: false,
            done: false,
            time: '',
            calories: '',
            currentExercise: 0,
            currentSet: ['0', '0', '0', '0'],
            isAll: false,
        };
        
        this.toggleOn = this.toggleOn.bind(this);
        this.toggleDone = this.toggleDone.bind(this);
        this.setTime = this.setTime.bind(this);
        this.reset = this.reset.bind(this);
        this.increment = this.increment.bind(this);
        this.decrement = this.decrement.bind(this);
        this.finish = this.finish.bind(this);
        this.next = this.next.bind(this);
        this.prev = this.prev.bind(this);
        this.toggleAll = this.toggleAll.bind(this);
        this.jumpTo = this.jumpTo.bind(this);
    }

    UNSAFE_componentWillReceiveProps(nextProps){
        if(nextProps.data.length !== this.state.currentSet.length){
            const currentSet = [];

            for (let i = 0; i < this.props.data.length; i++){
                currentSet.push('0');
            }

            this.setState({
                currentSet: currentSet,
            })
        }
    }

    toggleOn(currentOn) {
        this.setState({
            isOn: currentOn,
        })
    }

    toggleDone(){
        const newDone = !this.state.done;

        this.setState({
            done: newDone,
        })
    }

    setTime(value){
        this.setState({
            time: value,
        });
    }

    reset(){
        const currentSet = [];

        for (let i = 0; i < this.props.data.length; i++){
            currentSet.push('0');
        }

        this.setState({
            isOn: false,
            done: false,
            time: '',
            calories: '',
            currentExercise: 0,
            currentSet: currentSet,
            isAll: false,

        })
    }

    increment(){
        let newSet = this.state.currentSet[this.state.currentExercise] - 0 + 1;

        if(newSet > this.props.data[this.state.currentExercise].sets - 0 && this.state.currentExercise < this.props.data.length - 1){
            const nextExercise = this.state.currentExercise + 1;

            this.setState({
                currentExercise: nextExercise,
            })
            return;
        } else if(newSet === this.props.data[this.state.currentExercise].sets - 0){

            const currentSet = this.state.currentSet;
            currentSet[this.state.currentExercise] = newSet;

            this.setState({
                currentSet: currentSet,
            })

            let calories = 0;

            for(let i = 0; i < this.props.data.length; i++){
                if(this.state.currentSet[i] !== this.props.data[i].sets - 0){
                    return
                }

                calories += this.props.data[i].calories * currentSet[i] * this.props.data[i].times;
            }

            this.setState({
                done: true,
                calories: calories,
            });
            return;
        }else if(newSet > this.props.data[this.state.currentExercise].sets - 0){
            return;
        }

        const currentSet = this.state.currentSet;
        currentSet[this.state.currentExercise] = newSet;

        this.setState({
            currentSet: currentSet,
        });
    }

    decrement(){
        let newSet = 0;

        if(this.state.currentSet[this.state.currentExercise] > 0){
            newSet = this.state.currentSet[this.state.currentExercise] - 1;
        }

        const currentSet = this.state.currentSet;
        currentSet[this.state.currentExercise] = newSet;
        
        if(newSet === 0 && this.state.currentExercise > 0){
            const nextExercise = this.state.currentExercise - 1;
            this.setState({
                currentSet: currentSet,
                currentExercise: nextExercise,
            })
            return;
        }

        this.setState({
            currentSet: currentSet,
        })
    }

    finish(){
        const currentSet = this.state.currentSet;

        let calories = 0;

        for(let i = 0; i < this.props.data.length; i++){
            calories += this.props.data[i].calories * currentSet[i] * this.props.data[i].times;
        }

        this.setState({
            done: true,
            calories: calories,
        });
    }

    next(){
        const nextExercise = this.state.currentExercise + 1;

        if(nextExercise <= this.props.data.length){
            this.setState({
                currentExercise: nextExercise
            })
        }
    }

    prev(){
        const nextExercise = this.state.currentExercise - 1;

        if(nextExercise >= 0){
            this.setState({
                currentExercise: nextExercise
            })
        }
    }

    jumpTo(number){
        this.setState({
            currentExercise: number,
        })
    }

    toggleAll(){
        const nextAll = !this.state.isAll;
        this.setState({
            isAll: nextAll
        })
    }

    render(){
        let time = '';

        if(this.state.time){
            time = this.state.time[0] + 'h ' + this.state.time[1] + 'm ' +  this.state.time[2] + 's';
        }

        const renderArray = [];
        for(let i = 0; i < this.props.data.length; i++){
            renderArray.push(
                <Slide
                    key={this.props.data[i].id + 's'} 
                    data={this.props.data[i]}
                    number={i} 
                    currentExercise={this.state.currentExercise} 
                    currentSet={this.state.currentSet[this.state.currentExercise]} 
                    isOn={this.state.isOn}
                    increment={this.increment}
                    decrement={this.decrement}
                />
            );
        }

        const current = this.state.currentExercise;

        return(
            <div className='workout'>
                <Timer toggleOn={this.toggleOn} isDone={this.state.done} setTime={this.setTime} reset={this.reset} />

                <div className='slider'>
                    <div className='slider__navigation--top'>
                        {current > 0 &&
                            <div className='slider__navigation--prev'>
                                <div className={`slider__prev ${this.state.isOn? 'slider__isOn--slider' : 'slider__isOff--slider'}`} onMouseDown={this.prev}>
                                    <div className={`slider__prev--emblem ${this.state.isOn? 'slider__isOn' : 'slider__isOff'}`}></div>
                                    <p>{this.props.data[current-1].name}</p>
                                </div>
                            </div>
                        }
                        {current < this.props.data.length - 1 &&
                            <div className='slider__navigation--next'>
                                <div className={`slider__next ${this.state.isOn? 'slider__isOn--slider' : 'slider__isOff--slider'}`} onMouseDown={this.next}>
                                    <p>{this.props.data[current+1].name}</p>
                                    <div className={`slider__next--emblem ${this.state.isOn? 'slider__isOn' : 'slider__isOff'}`}></div>
                                </div>
                            </div>
                        }
                    </div>
                    {renderArray}
                    <div className='slider__navigation'>
                        <div className='slider__button slider__button__before' onMouseDown={this.props.onPrev} >
                            <p>Back</p>
                        </div>
                        <div className='slider__button' onMouseDown={this.toggleAll}>
                            <p>All</p>
                        </div>
                        <div className='slider__button slider__button__after' onMouseDown={this.finish}>
                            <p>Finish</p>
                        </div>
                    </div>
                        <Summarly 
                            data={this.props.data} 
                            currentSet={this.state.currentSet} 
                            currentExercise={this.state.currentExercise} 
                            toggleAll={this.toggleAll} 
                            isAll={this.state.isAll} 
                            jumpTo={this.jumpTo}
                        />
                </div>


                <div className={`workout__modal ${this.state.done? '' : 'workout__modal--hidden'}`}>
                    <div className='workout__container'>
                        <h2>Great Job!</h2>
                        {time
                            ?<p>You complited your workout in: {time}</p>
                            :<p>You didn't use timer</p>
                        }
                        <p>You burned {this.state.calories} calories</p>
                        <div className='workout__button-box'>
                            <button className='workout__button' onMouseDown={()=>{this.props.onPrev(); this.reset()}} >Done</button>
                            <button className='workout__button' onMouseDown={this.toggleDone} >Continue</button>
                        </div>
                    </div>
                </div>

            </div>
        )
    }
}

export default Workout;