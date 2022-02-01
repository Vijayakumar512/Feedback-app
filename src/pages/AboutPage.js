import React,{useState} from 'react';
import {Link} from 'react-router-dom';
import Card from '../components/Card';
function AboutPage(){

  return(
    <Card>
    <div>
    <p>This is the about page</p>
    <Link to='/'>Back to Home</Link>
    </div>
    </Card>
  );
}

export default AboutPage;
