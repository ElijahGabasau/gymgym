import React from 'react';
import './RenderPreview.scss';

import Preview from '../Preview/Preview.js';

class RenderPreview extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            isCheckMode: false,
        }

        this.activateCheckMode = this.activateCheckMode.bind(this);
        this.handleAdd = this.hadnleAdd.bind(this);
        this.handleDone = this.handleDone.bind(this);
    }

    UNSAFE_componentWillReceiveProps(nextProps, nextState){
        if(nextProps.addObjects.length === 0){
            this.setState({
                isCheckMode: false
            });
        }
    }

    activateCheckMode(){
        this.setState({
            isCheckMode: true
        })
    }

    handleDone() {
        this.setState({
            isCheckMode: false
        });
        this.props.handleDone();
    }

    hadnleAdd() {
        this.props.handleAdd();
        this.setState({
            isCheckMode: false
        });
        this.props.handleDone(true);
    }

    render() {
        const previewRender = [];

        for (let i = 0; i < this.props.data.length; i++ ){
            previewRender.push(<Preview 
                data={this.props.data[i]} 
                isCheckMode={this.state.isCheckMode} 
                activateCheckMode={this.activateCheckMode} 
                spliceFrom={this.props.spliceFrom}
                pushTo={this.props.pushTo}
            />)
        }

        return(
            <div className='render-preview'>
                <div className='render-preview__container'>
                    {previewRender}
                </div>
                <button className='render-preview__menu' onMouseDown={this.handleAdd} >Add</button>
                <button className='render-preview__menu' onMouseDown={this.handleDone} >Back</button>
            </div>
        )
    }
}

export default RenderPreview;