import React,{useState} from 'react';
import {BrowserRouter as Router, Routes, Route,Link} from 'react-router-dom';
import Header from './components/Header';
import FeedbackItem from './components/FeedbackItem';
import FeedbackList from './components/FeedbackList';
import FeedbackStats from './components/FeedbackStats';
import FeedbackForm from './components/FeedbackForm';
import AboutPage from './pages/AboutPage';
import {FaQuestion} from 'react-icons/fa';
import {FeedbackProvider,FeedbackContext} from './context/FeedbackContext';

function App(){

  return(
    <FeedbackProvider>
    <Router>
    <Header/>
    <div className="container">
    <Routes>
    <Route exact path='/' element={
      <>
      <FeedbackForm />
      <FeedbackStats/>
      <FeedbackList />
      </>
    }/>
    <Route path='/about' element={<AboutPage/>}/>
    </Routes>
    <div className='about-link'>
    <Link to='/about'>
     <FaQuestion size={30}/>
     </Link>
    </div>
    </div>
    </Router>
    </FeedbackProvider>
  );
}

export default App;
