import React,{useState,useContext} from 'react';
import Card from './Card';
import PropTypes from 'prop-types';
import {FeedbackContext} from '../context/FeedbackContext';

function FeedbackStats(){
  const {feedback} = useContext(FeedbackContext);

let average=feedback.reduce((acc,feedback)=>{
  return acc+feedback.rating;
},0)/feedback.length
  return(
    <div className="feedback-stats">
    <h4>{feedback.length} {feedback.length>1?'Reviews':'Review'}</h4>
    <h4>Average Rating : {isNaN(average)?0:average}</h4>
    </div>
  );
}

export default FeedbackStats;
