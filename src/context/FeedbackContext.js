import React,{useState,createContext} from 'react';
import FeedbackData from '../data/FeedbackData';

const FeedbackContext=createContext();

const FeedbackProvider=({children})=>{

  const [feedback,setfeedback]=useState(FeedbackData);
  const [editFeed,seteditfeed]=useState({item:{},edit:false});
  const deleteFeedback=(id)=>{
    if(window.confirm('Are you sure you want to delete ?')){
      setfeedback(feedback.filter((feedback)=>feedback.id!==id));
    }
    console.log(id);
  };
  const addFeedback=(newfeedback)=>{
    setfeedback([newfeedback,...feedback]);
  }
  const editFeedback=(id,rating,text)=>{
    seteditfeed({item:{id,rating,text},edit:true});
    console.log(editFeed);
  }
  const updateFeedback=(id,item)=>{
   feedback.map((feedback)=>{
     if(feedback.id===id){
       feedback.id=item.id;
       feedback.text=item.text;
       feedback.rating=item.rating;
     }
   });
   setfeedback([...feedback]);
  };
  return (
    <FeedbackContext.Provider value={{feedback,updateFeedback,deleteFeedback,addFeedback,editFeedback,editFeed}}>
    {children}
    </FeedbackContext.Provider>
  );
};

export  {FeedbackContext,FeedbackProvider};
