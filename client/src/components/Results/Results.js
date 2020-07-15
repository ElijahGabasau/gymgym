import React from 'react';
import './Results.scss';

import Collapse from '@kunukn/react-collapse';

import RenderExercise from '../RenderExercise/RenderExercise.js';
import RenderPreview from '../RenderPreview/RenderPreview.js';

class Results extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            customize: false,
            add: false,
            remove: false,
            removeObjects: [],
            addObjects: [],
        }
        this.toggleResultsState = this.toggleResultsState.bind(this);
        this.handleBackToCustomize = this.handleBackToCustomize.bind(this);
        this.handleDone = this.handleDone.bind(this);
        this.handleAdd = this.handleAdd.bind(this);
        this.handleRemove = this.handleRemove.bind(this);
        this.pushTo = this.pushTo.bind(this);
        this.spliceFrom = this.spliceFrom.bind(this);
        this.activateRemove = this.activateRemove.bind(this);
    }

    pushTo(pushElement, action) {
        const objectAction = action + 'Objects';
        const state = this.state[objectAction];

        if(state.includes(pushElement)){
            return;
        }

        state.push(pushElement);

        const newState = {};
        newState[objectAction] = state;

        this.setState({newState});
    }

    spliceFrom(spliceElement, action){
        const objectAction = action + 'Objects';
        const state = this.state[objectAction];

        let index = -1;

        for (let i = 0; i < state.length; i++){
            if(state[i] === spliceElement){
                index = i;
                break;
            }
        }

        if(index >= 0){
            state.splice(index, 1);

            const newState = {};
            newState[objectAction] = state;

            this.setState(newState);

            if(action === 'remove' && newState.removeObjects.length === 0){
                this.setState({
                    remove: false,
                })
            }
        }
    }

    toggleResultsState(name) {
        const currentValue = this.state[name];
        const newValue = !currentValue;
    
        const newState = {};
        newState[name] = newValue;
    
        this.setState(newState);
    }

    activateRemove() {
        this.setState({
            remove: true,
        })
    }

    handleAdd() {
        this.toggleResultsState('add');
        this.props.onAdd(this.state.addObjects);

        this.setState({
            addObjects: []
        })
    }
    
    handleRemove() {
        this.toggleResultsState('remove');
        this.props.onRemove(this.state.removeObjects);

        this.setState({
            removeObjects: []
        })
    }

    handleBackToCustomize(){
        this.setState({
            add: false,
            remove: false,
            removeObjects: [],
            addObjects: []
        })
    }

    handleDone() {
        this.setState({
            customize: false,
            add: false,
            remove: false,
            removeObjects: [],
            addObjects: []
        })
    }

    render() {
        return(
                <div className='gym-results'>
                    <Collapse  isOpen={this.state.add? false : true} transition="height 0.7s cubic-bezier(.4, 0, .2, 1)">
                        {this.state.remove
                            ? <h2>{this.state.removeObjects.length} Chosen</h2>
                            : <h2>Your workout for today:</h2>
                        }
                        <RenderExercise data={this.props.data} 
                                        isCustomize={this.state.customize} 
                                        isRemove={this.state.remove} 
                                        pushTo={this.pushTo} 
                                        spliceFrom={this.spliceFrom}
                                        activateRemove={this.activateRemove}
                        />
                        {!this.state.customize &&
                            <div className='gym-results__menu'>
                                <button onMouseDown={()=>{this.toggleResultsState('customize')}} className='results-button'>Customize</button>
                                <button onMouseDown={this.props.onPrev} className='results-button'>Back</button>
                                <button className='results-button results-button__begin' onMouseDown={this.props.onNext}>Begin Workout!</button>
                            </div>
                        }
                        {this.state.customize &&
                            <div className='gym-results__menu'>
                                {this.state.remove
                                    ?<button onMouseDown={this.handleRemove} className='results-button'>Remove</button>
                                    :<button onMouseDown={()=>{this.toggleResultsState('add')}} className='results-button'>Add</button>
                                }
                                {this.state.remove
                                    ?<button onMouseDown={()=>{this.handleBackToCustomize()}} className='results-button'>Clear</button>
                                    :<button onMouseDown={()=>{this.handleDone()}} className='results-button'>Done</button>
                                }
                            </div>
                        }
                    </Collapse>
                    <Collapse  isOpen={this.state.add? true : false} transition="height 0.7s cubic-bezier(.4, 0, .2, 1)">
                        {this.state.addObjects.length === 0
                            ? <div>
                                <h2 className='gym-results__desktop'>Hover to choose</h2>
                                <h2 className='gym-results__mobile'>Hold to choose</h2>
                              </div>
                            : <h2>{this.state.addObjects.length} Chosen</h2>
                        }
                        <RenderPreview 
                            toggleResultsState={this.toggleResultsState} 
                            data={this.props.coData} 
                            spliceFrom={this.spliceFrom} 
                            pushTo={this.pushTo} 
                            handleAdd = {this.handleAdd}
                            handleDone={this.handleBackToCustomize}
                            addObjects={this.state.addObjects}
                        />
                    </Collapse>
                </div>
        )
    }
}

export default Results;