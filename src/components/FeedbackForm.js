import React,{useState,useContext,useEffect} from 'react';
import PropTypes from 'prop-types';
import Card from './Card';
import Button from './Button';
import RatingSelect from './RatingSelect';
import {v4 as uuidv4} from 'uuid';
import {FeedbackContext} from '../context/FeedbackContext';

function FeedbackForm(){
  const {addFeedback,editFeed,updateFeedback,feedback}=useContext(FeedbackContext);

  useEffect(()=>{
    if(editFeed.edit===true){
      setdisable(false);
      setrating(editFeed.item.rating);
      setreview(editFeed.item.text);
    }
  },[editFeed.edit,feedback])
  const [review,setreview]=useState('');
  const [rating,setrating]=useState(10);
  const [disable,setdisable]=useState(true);
  const [message,setmessage]=useState('');

  const handleChange=(e)=>{
    console.log(review.length);
    if(review===''){
      setmessage('')
      setdisable(true);
    }
    else if(review!=='' && review.length<=9){
      setmessage('Text must be atleast 10 characters');
      setdisable(true);
    }

    else{
      setmessage(null);
      setdisable(false);
    }
    setreview(e.target.value);
  };
  const handleSubmit=(e)=>{
    e.preventDefault();
    if(editFeed.edit===true){
      const newFeedback={text:review,rating,id:editFeed.item.id};
      updateFeedback(editFeed.item.id,newFeedback);
      setreview('');
      editFeed.edit=false;
    }
    else{
      const newFeedback={text:review,rating,id:uuidv4()};
      console.log(newFeedback);
      addFeedback(newFeedback);
    }
  };
  return(
    <Card>
    <form onSubmit={handleSubmit}>
    <RatingSelect select={(value)=>{setrating(value)}}/>
    <h2>How would you rate your service with us ?</h2>
    <div className='input-group'>
    <input type='text'
    placeholder='Write a review for us'
    value={review}
    onChange={handleChange}
    />
    <Button type="submit" version="secondary" isDisabled={disable}>Send</Button>
    </div>
    {message&&<div className='message'>{message}</div>}
    </form>
    </Card>
  );
}

export default FeedbackForm;
