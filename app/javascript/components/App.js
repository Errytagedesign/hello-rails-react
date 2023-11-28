import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import Home from './Home';
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
        console.log(data);
        dispatch(setGreeting(data.greeting));
      })
      .catch((error) => console.error('Error fetching greeting:', error));
  }, [dispatch]);

  return (
    <main>
      <Router>
        <Routes>
          <Route path='/' element={<Greetings />} />
        </Routes>
      </Router>
    </main>
  );
}

export default App;
