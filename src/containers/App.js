import React, { Component } from 'react';
import classes from './App.css';
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cokpit';
import withClass from '../hoc/withClass';
import Aux from '../hoc/Auxiliary';
// import ErrorBoundary from './ErrorBoundary/ErrorBoundary';

class App extends Component {
  constructor(props){
    super(props);
    console.log('[App.js] constructor');
  }


  state = {
    persons: [
      { id: 'erg45', name: 'Diego', age: 23},
      { id: '7uk51', name: 'Manu', age: 20},
      { id: 'erh1e', name: 'Stephanie', age: 26}
    ],
    otherState: 'some other value',
    showPersons: false,
    showCokpit: true 
  }

  static getDerivedStateFromProps(props, state){
    console.log('[App.js] getDerivedStateFromProps', props);
    return state;
  } 
  
  componentDidMount() {
    console.log('[App.js] componentDidMount');
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log('[App.js] shouldComponentUpdate');
    if (nextProps.persons !== this.props.persons){
      return true;
    } else {
      return true;
    }
  }

  componentDidUpdate(){
    console.log('[App.js] componentDidUpdate');
  }
  
  nameChangeHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    });

    const person = {
     ...this.state.persons[personIndex]
    };

    person.name = event.target.value;

    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState({ persons: persons });
  }

  deletePersonHandler = (personIndex) => {
    // const persons = this.state.persons.slice();
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({persons: persons});
  }

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({showPersons: !doesShow});
  }

  render() {
    console.log('[App.js] render'); 
    let persons = null;

    if (this.state.showPersons) {
      persons = 
          <Persons 
            persons={this.state.persons}
            clicked={this.deletePersonHandler}
            changed={this.nameChangeHandler} />;
    }
    
    return (
      <Aux>
      <button 
        onClick={() => {
          this.setState({ showCokpit: false });
        }} >
          Remove cokpit
        </button>
        {this.state.showCokpit ? <Cockpit 
        showPersons={this.state.showPersons}
        personsLength={this.state.persons.length}
        clicked={this.togglePersonsHandler}
        appTitle={this.props.appTitle} /> : null}
        {persons}
      </Aux>
    );
    // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'HI, I\'m a React App!!'));
  }
}

export default withClass(App, classes.App);