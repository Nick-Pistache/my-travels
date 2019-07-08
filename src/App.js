import React, { Component } from 'react';
import './App.css';
import Travel from './Travel'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Travel
          photo="http://marc-uhry.com/wp-content/uploads/2016/05/France.jpg"
          destination="Paris"
          country="Berlin"
          distance="1000km"         
        />
        <Travel
          photo="https://educaro.tn/wp-content/uploads/2018/03/berlin_1920x800-846x353.jpg"
          destination="I believe the children are the future... Unless we stop them now!"
          country="Berlin"
          distance="2000km"         
        />
      </div>
    );
  }
}

export default App;
