import React,{useState,useContext} from 'react';
import FeedbackItem from './FeedbackItem';
import PropTypes from 'prop-types';
import {motion, AnimatePresence} from 'framer-motion';
import {FeedbackContext} from '../context/FeedbackContext';

function FeedbackList(){

  const {feedback} = useContext(FeedbackContext);

  if(!feedback||feedback.length===0){
    return(
      <p> No items to display</p>
    );
  }

  return(
    <div className='container'>
    <AnimatePresence>
    {feedback.map((feedback)=>{
      return(
        <motion.div key={feedback.id} inital={{opacity:0}} animate={{opacity:1}} exit={{opacity:0}}>
        <FeedbackItem key={feedback.id} id={feedback.id} rating={feedback.rating} text={feedback.text}/>
        </motion.div>
      );
    })}
    </AnimatePresence>
    </div>
  );
}

FeedbackList.propTypes={
  feedback:PropTypes.arrayOf(
    PropTypes.shape({
      id:PropTypes.string.isRequired,
      text:PropTypes.string.isRequired,
      rating:PropTypes.number.isRequired
    })
  )
}

export default FeedbackList;
