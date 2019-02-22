import React, { useEffect } from 'react';
import classes from './Cockpit.css'

const cockpit = props => {

    useEffect(() => {
      console.log('[Cokpit.js] useEffect');
      // HTTP request...
      setTimeout(() => {
        alert('Saved data to cloud!');
      }, 1000);
      return () => {
        console.log('[Cokpit.js] cleanup work in useEffect')
      }
    }, []);

    useEffect(() => {
      console.log('[Cokpit.js] 2nd useEffect');
      return () => {
        console.log('[Cokpit.js] cleanup work in  2nd useEffect')
      }
    });


    let assignedClasses = [];
    let btnClass = '';
    if (props.showPersons){
        btnClass = classes.Red;
    }

    if (props.personsLength <= 2){
      assignedClasses.push(classes.red);
    }
    if (props.personsLength <= 1){
      assignedClasses.push(classes.bold);
    }

    return (
        <div className={classes.Cockpit}>
            <h1>{props.appTitle}</h1>
            <p className={assignedClasses.join(' ')}>working!</p>
            <button className={btnClass}
            onClick={props.clicked} >Toggle Persons</button>
        </div>
    );
}

export default React.memo(cockpit);