import React from 'react';
import ReactDOM from 'react-dom';

//Create a bew component.This component produce should
//some HTML
const App = function(){
  return <div>Hi!</div>;
}

//Take this generated component and put it
//on the page (in the DOM)
ReactDOM.render(App);
