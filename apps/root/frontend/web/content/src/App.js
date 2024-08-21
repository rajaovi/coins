import './App.css';
import React from 'react';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { getAllPosts } from './store/Actions/TestAction';
import RoutePage from './routes';
import './style/_common.scss';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllPosts());
  }, [dispatch]);
  return (
    <div className="App">
      <RoutePage />
    </div>
  );
}

export default App;
