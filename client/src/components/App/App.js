import React from 'react';

import Start from '../Start/Start.js';
import Option from '../Option/Option.js';
import Results from '../Results/Results.js';
import Workout from '../Workout/Workout.js';

import Collapse from '@kunukn/react-collapse';

import './App.scss';

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      'page': 0,
      searchResults: [],
      additionalResults: []
    };

    this.nextPage = this.nextPage.bind(this);
    this.prevPage = this.prevPage.bind(this);
    this.addExercise = this.addExercise.bind(this);
    this.removeExercise = this.removeExercise.bind(this);
    this.getExercise = this.getExercise.bind(this);
  }

  getExercise = async (data) => {
    try{
      const response = await fetch('/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data),
      });

      const responseJSON = await response.json();

      if(response.status !== 200) {
        throw Error(responseJSON.message);
      }

      this.setState({
        searchResults: responseJSON[0],
        additionalResults: responseJSON[1],
        page: 2,
      });
      
    }catch(err){
      console.log(err);
    }
  }

  nextPage() {
    const currentPage = this.state.page;
    const nextPage = currentPage + 1;

    this.setState({
      'page': nextPage,
    })
  }

  prevPage() {
    const currentPage = this.state.page;
    const nextPage = currentPage - 1;

    this.setState({
      'page': nextPage,
    })
  }

  addExercise(addArray){
    const idArray = addArray;
    const searchResults = this.state.searchResults;
    const additionalResults = this.state.additionalResults;
    const newResults = this.state.searchResults;

    main: while (idArray.length > 0){
      const id = idArray.pop();

      for (let i = 0; i < searchResults.length; i++){
        if (id === searchResults[i].id){
          continue main;
        }
      }

      for (let i = 0; i < additionalResults.length; i++){
        if (id === additionalResults[i].id){
          newResults.push(additionalResults[i]);
        }
      }
    }

    this.setState({
      searchResults: newResults,
    })
  }

  removeExercise(idArray){
    const searchResults = this.state.searchResults;
    const newResults = [];

    for (let i = 0; i < searchResults.length; i++){
      if (idArray.includes(searchResults[i].id)){
        continue;
      }
      newResults.push(searchResults[i]);
    }

    this.setState({
      searchResults: newResults,
    })
  }

  render(){
    const data = this.state.searchResults;
    const coData = this.state.additionalResults;
    const page = this.state.page;

    return (
      <div>
        <Collapse  isOpen={page === 0? true : false} transition="height 0.7s cubic-bezier(.4, 0, .2, 1)">
          <Start onNext={this.nextPage} />
        </Collapse>
        <Collapse  isOpen={page === 1? true : false} transition="height 0.7s cubic-bezier(.4, 0, .2, 1)">
          <Option onNext={this.nextPage} getExercise={this.getExercise}/>
        </Collapse>
        <Collapse  isOpen={page === 2? true : false} transition="height 0.7s cubic-bezier(.4, 0, .2, 1)">
          <Results 
            data={data} 
            coData={coData} 
            onNext={this.nextPage} 
            onPrev={this.prevPage} 
            onAdd={this.addExercise} 
            onRemove={this.removeExercise} 
          />
        </Collapse>
        <Collapse  isOpen={page === 3? true : false} transition="height 0.7s cubic-bezier(.4, 0, .2, 1)">
          <Workout data={this.state.searchResults} onPrev={this.prevPage} />
        </Collapse>
      </div>
    );
  }
}

export default App;
