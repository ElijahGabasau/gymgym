import React from 'react';
import './Summarly.scss';

class Summarly extends React.Component {
    render() {
        const renderSummarly = [];
        for (let i = 0; i < this.props.data.length; i++){
            renderSummarly.push(
                <div key={this.props.data[i].id + 'sum'} className={`summarly__exercise ${this.props.currentSet[i] === this.props.data[i].sets - 0? 'summarly__exercise__complete' : ''} 
                    ${this.props.currentExercise === i? 'summarly__exercise__current' : '' }`}
                    onMouseDown={()=>{this.props.jumpTo(i)}}
                >
                    <div className='summarly__content'>
                        <h4>{this.props.data[i].name}</h4>
                        <p>{this.props.currentSet[i]}/{this.props.data[i].sets}</p>
                    </div>
                    <div className='summarly__button-bar'>
                        <div className={`summarly__button ${this.props.currentSet[i] === this.props.data[i].sets - 0? '' : 'summarly__button__hidden'}`}>
                            <div className='summarly__done'></div>
                        </div>
                    </div>
                </div>
            )
        }

        return(
            <div className={`summarly ${this.props.isAll? '' : 'summarly__hidden'}`}>
                <div className='summarly__container'>
                    <h3 className='summarly__title'>Workout for today:</h3>
                    <div className='summarly__render-box'>
                        {renderSummarly}
                    </div>
                    <button className='summarly__close' onMouseDown={this.props.toggleAll}>Close</button>
                </div>
            </div>
        )
    }
}

export default Summarly;