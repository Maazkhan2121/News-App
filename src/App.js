
import './App.css';

import React, {  useState } from 'react'
import Navbar from './components/Navbar';
import News   from './components/News';
import {BrowserRouter,Routes, Route } from "react-router-dom";
import LoadingBar from 'react-top-loading-bar'

const App =()=>{

 const pageSize=6;
 const apikey= process.env.REACT_APP_API_KEY
 const [progress, setProgress]= useState(0)

//   state={
//     progress:0
//   }
//   setProgress=(progress)=>{
// setState({progress:progress})
//   }
  
  

 
    return (
  
      
     <>
      <div>
      <BrowserRouter>
        <Navbar />
        <LoadingBar
        height={3}
        color='#f11946'
        progress={progress}
      />
        <Routes>
       <Route exact path="/business" element={<News setProgress={setProgress}apikey={apikey} key="business" pageSize={pageSize} country="in" category="Business"/>}></Route> 
       <Route exact path="/entertainment" element={<News setProgress={setProgress}apikey={apikey} key="entertainment" pageSize={pageSize} country="in" category="Entertainment"/>}></Route> 
       <Route exact path="/general" element={<News setProgress={setProgress}apikey={apikey} key="general" pageSize={pageSize} country="in" category="General"/>}></Route> 
       <Route exact path="/health" element={<News setProgress={setProgress}apikey={apikey} key="health" pageSize={pageSize} country="in" category="Health"/>}></Route> 
       <Route exact path="/science" element={<News setProgress={setProgress}apikey={apikey} key="science" pageSize={pageSize} country="in" category="Science"/>}></Route> 
       <Route exact path="/sports" element={<News setProgress={setProgress}apikey={apikey} key="sports" pageSize={pageSize} country="in" category="Sports"/>}></Route> 
       <Route exact path="/technology" element={<News setProgress={setProgress}apikey={apikey} key="technology" pageSize={pageSize} country="in" category="Technology"/>}></Route> 
       <Route exact path="/about" element={<about/>}></Route> 
        </Routes>
        </BrowserRouter>
        </div>
      </>
    )
  }

export default App;
