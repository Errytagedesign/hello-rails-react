import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Home';
import Greetings from './Greetings';
import { useDispatch } from 'react-redux';
import { setGreeting } from '../Redux/Features/greetingsSlice';

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    // Fetch logic for getting random greetings from API
    fetch('/api/random_greeting')
      .then((response) => response.json())
      .then((data) => {
        dispatch(setGreeting(data.greeting));
      })
      .catch((error) => console.error('Error fetching greeting:', error));
  }, [dispatch]);
  return (
    <Router>
      <Routes>
        <Route path='/' exact component={Home} />
        <Route path='/greetings' component={Greetings} />
      </Routes>
    </Router>
  );
}

export default App;
