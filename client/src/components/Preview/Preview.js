import React from 'react';
import './Preview.scss';

import RenderDifficulty from '../RenderDifficulty/RenderDifficulty.js';

class Preview extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            isExpand: false,
            isChecked: false,
            isHover: false,
        }

        this.togglePreviewState = this.togglePreviewState.bind(this);

        this.handleLongPress = this.handleLongPress.bind(this);
        this.handleRelease = this.handleRelease.bind(this);
        this.handleCheck = this.handleCheck.bind(this);
        this.handleMouseOver = this.handleMouseOver.bind(this);
        this.handleMouseOut = this.handleMouseOut.bind(this);
    }

    UNSAFE_componentWillReceiveProps(nextProps){
        if(nextProps.isCheckMode){
            this.setState({
                isExpand: false,
            })
        }
    }

    togglePreviewState(name){
        const currentValue = this.state[name];
        const newValue = !currentValue;

        const newState = {};
        newState[name] = newValue;

        this.setState(newState);
    }

    handleLongPress() {
        this.timer = setTimeout(()=>{
            this.setState({
                isChecked: true
            })
            this.props.pushTo(this.props.data.id, 'add');
            this.props.activateCheckMode();
        }, 1000);
    }

    handleRelease() {
        clearTimeout(this.timer);
    }

    handleCheck() {
        const toggledChecked = !this.state.isChecked;
        this.togglePreviewState('isChecked');

        if(toggledChecked){
            this.props.pushTo(this.props.data.id, 'add');
            this.props.activateCheckMode();
        }else{
            this.props.spliceFrom(this.props.data.id, 'add');
        }
    }

    handleMouseOver() {
        this.setState({
            isHover: true,
        });
    }

    handleMouseOut() {
        this.setState({
            isHover: false,
        })
    }

    render(){
        const data = this.props.data;

        return(
            <div 
                className={`preview ${this.state.isExpand? 'preview__expand' : ''} ${this.state.isChecked? 'preview__checked' : ''}`} 
            >   
                <div className='preview__mobile'
                    onTouchStart={this.props.isCheckMode? this.handleCheck : this.handleLongPress }
                    onTouchEnd={this.props.isCheckMode? undefined : this.handleRelease}
                >
                    
                    {this.state.isChecked &&
                        <div className='check-mark'>
                            <div className='check-mark__container'>
                                <div className='check-mark__arrow'></div>
                            </div>
                        </div>
                    }

                    <div className='preview__block'>
                        <div className='preview__row'>
                            <h3 className='preview__title'>{data.name}</h3>
                            <RenderDifficulty difficulty={data.difficulty} index={this.props.index} component='p' size={0.7} />
                        </div>
                        <div className='preview__calory'>
                            <p>{data.calories} ccal per 1 set</p>
                        </div>
                    </div>
                    <div className='preview__block'>
                        <h4>Muscules</h4>
                        <p>{data.muscules.map((muscule, index)=>{
                            if(index === data.muscules.length - 1){
                                return muscule;
                            }
                            return muscule + ', ';
                            })}
                        </p>
                    </div>
                    {this.state.isExpand &&
                        <div className='preview__block'>
                            <h4>Description</h4>
                            <p>{data.description}</p>
                        </div>
                    }
                </div>

                <div className='preview__desktop'
                    onMouseEnter={this.handleMouseOver}
                    onMouseLeave={this.handleMouseOut}
                    onMouseDown={this.props.isCheckMode? undefined : ()=>{this.togglePreviewState('isExpand')}}
                >
                    {this.state.isChecked && 
                        <div className='check-mark' onMouseDown={this.handleCheck}>
                            <div className='check-mark__container'>
                                <div className='check-mark__arrow'></div>
                            </div>
                        </div>
                    }

                    <div className='preview__block'>
                        <div className='preview__row'>
                            <h3 className='preview__title'>{data.name}</h3>
                            {this.state.isHover && !this.state.isChecked
                                ? <div className='preview__button' onMouseDown={this.handleCheck}>
                                    <img src={require('./plus.png')} alt='' />
                                </div>
                                : <RenderDifficulty difficulty={data.difficulty} index={this.props.index} component='p' size={0.7} />
                            }
                        </div>
                        <div className='preview__calory'>
                            <p>{data.calories} ccal per 1 set</p>
                        </div>
                    </div>
                    <div className='preview__block'>
                        <h4>Muscules</h4>
                        <p>{data.muscules.map((muscule, index)=>{
                            if(index === data.muscules.length - 1){
                                return muscule;
                            }
                            return muscule + ', ';
                            })}
                        </p>
                    </div>
                    {this.state.isExpand &&
                        <div className='preview__block'>
                            <h4>Description</h4>
                            <p>{data.description}</p>
                        </div>
                    }
                </div>
            </div>
        )
    }
}

export default Preview;