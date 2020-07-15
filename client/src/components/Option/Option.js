import React from 'react';

import './Option.scss';

class Option extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            gender: 'male',
            intencivity: 'low',
            times: '3',
            muscules: 'all',
        }

        this.updateForm = this.updateForm.bind(this);
        this.pushMuscules = this.pushMuscules.bind(this);
    }

    componentDidMount(){
        document.getElementById('all').checked = true;
    }

    updateForm(e){
        const name = e.target.getAttribute('name');
        const value = e.target.value;

        const newState = {};
        newState[name] = value;

        this.setState(newState);
    }

    pushMuscules(e){

        if(e.target.value === 'all'){
            document.querySelectorAll('[type="checkbox"]').forEach((checkbox) => {
                checkbox.checked = false;
            });
            document.querySelector('#all').checked = true;
    
            this.setState({
                muscules: 'all',
            })

            return;
        }
           
        document.querySelector('#all').checked = false; 

        let musculeArray = this.state.muscules;
        
        if(typeof musculeArray === 'string'){
            musculeArray = [];
        }

        const muscule = e.target.value;
        
        if(musculeArray.includes(muscule)){
            for(let i = 0; i < musculeArray.length; i++){
                if(musculeArray[i] === muscule){
                    musculeArray.splice(i, 1);
                }
            }
        }else{
            musculeArray.push(muscule);
        }
        this.setState({
            muscules: musculeArray,
        })
    }

    render() {
        return(
            <div className='gym-option'>
                <h2>Input your params</h2>
                <form className='form'>
                    <div className='form__desktop'>
                        <div>
                            <label className='form__label' htmlFor='gender'>Gender</label>
                            <br/>
                            <select className='form__input' name='gender' onChange={this.updateForm} >
                                <option>Male</option>
                                <option>Female</option>
                                <option>Hardcore</option>
                            </select>
                        </div>
                        <div>
                            <label className='form__label' htmlFor='intencivity' >Intencivity</label>
                            <select className='form__input' name='intencivity' onChange={this.updateForm} >
                                <option>Low</option>
                                <option>Medium</option>
                                <option>High</option>
                            </select>
                        </div>
                        <div>
                            <label className='form__label' htmlFor='times' >Work outs per week</label>
                            <input className='form__input' name='times' type='text' placeholder='3' onChange={this.updateForm} ></input>
                        </div>
                    </div>
                    <div className='checkbox' onChange={this.pushMuscules}>
                        <div>
                            <input id='all' type='checkbox' name='all' value='all' />
                            <label htmlFor='all'>All</label> 
                        </div> 
                        <div>
                            <input type='checkbox' name='biceps' value='biceps' />
                            <label htmlFor='biceps'>Biceps</label>
                        </div>
                        <div>
                            <input type='checkbox' name='triceps' value='triceps' />
                            <label htmlFor='triceps'>Triceps</label>
                        </div>
                        <div>
                            <input type='checkbox' name='forearm' value='forearm' />
                            <label htmlFor='forearm'>Forearm</label>
                        </div>
                        <div>
                            <input type='checkbox' name='shoulder' value='shoulder' />
                            <label htmlFor='shoulder'>Shoulder</label>
                        </div>
                        <div>
                            <input type='checkbox' name='trapezius' value='trapezius' />
                            <label htmlFor='trapezius'>Trapezius</label>
                        </div>
                        <div>
                            <input type='checkbox' name='rhomboid' value='rhomboid' />
                            <label htmlFor='rhomboid'>Rhomboid</label>
                        </div>
                        <div>
                            <input type='checkbox' name='latissimus' value='latissimus' />
                            <label htmlFor='latissimus'>Latissimus</label>
                        </div>
                        <div>
                            <input type='checkbox' name='longissimus' value='longissimus' />
                            <label htmlFor='longissimus'>Longissimus</label>
                        </div>
                        <div>
                            <input type='checkbox' name='scapular' value='scapular' />
                            <label htmlFor='scapular'>Scapular</label>
                        </div>
                        <div>
                            <input type='checkbox' name='pectoral' value='pectoral' />
                            <label htmlFor='pectoral'>Pectoral</label>
                        </div>
                        <div>
                            <input type='checkbox' name='abdominal' value='abdominal' />
                            <label htmlFor='abdominal'>Abdominal Press</label>
                        </div>
                        <div>
                            <input type='checkbox' name='buttock' value='buttock' />
                            <label htmlFor='buttock'>Buttock</label>
                        </div>
                        <div>
                            <input type='checkbox' name='anterior' value='anterior' />
                            <label htmlFor='anterior'>Anterior Thigh</label>
                        </div>
                        <div>
                            <input type='checkbox' name='posterior' value='posterior' />
                            <label htmlFor='posterior'>Posterior Thigh</label>
                        </div>
                        <div>
                            <input type='checkbox' name='medial' value='medial' />
                            <label htmlFor='medial'>Medial Thigh</label>
                        </div>
                        <div>
                            <input type='checkbox' name='calves' value='calves' />
                            <label htmlFor='calves'>Calves</label>
                        </div>
                        <div>
                            <input type='checkbox' name='cardio' value='cardio' />
                            <label htmlFor='cardio'>Cardio</label> 
                        </div> 
                    </div>
                </form>

                <button onMouseDown={()=>{this.props.getExercise(this.state)}}>Construct!</button>

            </div>
        )
    }
}

export default Option;