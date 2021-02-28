import React, {useEffect, useState} from 'react';
import './App.css';

const App = () => {

  const APP_ID = '395f868b';
  const APP_Key = 'fa45932018fff81024be7469d0d2aa4e';
  const examRQ = `https://api.edamam.com/api/food-database/v2/parser?ingr=red%20apple&app_id={APP_ID}&app_key={APP_Key}`;
  useEffect(() => {
    console.log('Effect has been run');
  });

    return (
    <div className="App">
      <h1>Kireh Masterchef!</h1>
      <form className="search_form">
        <input className="search_bar" type="text"> </input>
        <button className="search_button" type="submit">SEARCH</button>
      </form>
    </div>
  );
}

export default App;
