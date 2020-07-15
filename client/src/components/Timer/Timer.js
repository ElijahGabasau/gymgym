import React from 'react';
import './Timer.scss';

class Timer extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            time: ['00', '00', '00'],
            counter: 0,
            start: 0,
            isOn: false,
            isBegin: true,
        }

        this.startTimer = this.startTimer.bind(this);
        this.stopTimer = this.stopTimer.bind(this);
        this.resetTimer = this.resetTimer.bind(this);
    }

    startTimer() {
        this.setState({
            isBegin: false,
            isOn: true,
            counter: this.state.counter,
            start: Date.now() - this.state.counter
        });
        this.props.toggleOn(true);
        
        this.timer = setInterval(() => {
            const newCounter = Date.now() - this.state.start;
            let hours = Math.floor((newCounter % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            if(hours / 10 < 1){
                hours = '0' + hours;
            }

            let minutes = Math.floor((newCounter % (1000 * 60 * 60)) / (1000 * 60));
            if(minutes / 10 < 1){
                minutes = '0' + minutes;
            }

            let seconds = Math.floor((newCounter % (1000 * 60)) / 1000);
            if(seconds / 10 < 1){
                seconds = '0' + seconds;
            }

            this.setState({
                counter: newCounter,
                time: [hours, minutes, seconds],
            });

            if(!this.props.isDone){
                this.props.setTime([hours, minutes, seconds]);
            }

        }, 1000);
      }  
      
      stopTimer() {
        this.setState({isOn: false});
        this.props.toggleOn(false);
        clearInterval(this.timer);
      }  
      
      resetTimer() {
        clearInterval(this.timer);
        this.setState({
            counter: 0,
            time: ['00', '00', '00'], 
            isOn: false});
        this.props.toggleOn(false);
      }

    render(){
        const time = this.state.time;
        return(
            <div className='timer' >
                <div className='timer__button timer__button--reset' onMouseDown={()=>{this.resetTimer(); this.props.reset()}} >
                    <img className='timer__reset' src={require('./reset.png')} alt='reset button' />
                </div>
                {this.state.isBegin
                ? <div className='timer__display timer__display--blank' onMouseDown={this.startTimer}>
                    <p className='timer__counter' >Begin!</p>
                  </div>
                : <div 
                    className={`timer__display ${this.state.isOn? 'timer__display--play' : 'timer__display--pause'}`} 
                    onMouseDown={this.state.isOn? this.stopTimer : this.startTimer} 
                  >
                    <p className='timer__counter' >{time[0]}:{time[1]}:{time[2]}</p>
                  </div>
                }
            </div>
        )
    }
}

export default Timer;