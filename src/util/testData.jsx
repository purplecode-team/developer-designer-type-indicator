import React, { useState, useEffect, useRef } from 'react';
import Content from '../components/test/Content';
import firebase from './firebase';


const contentList = ()=>{
    const [devData,setDevData] = useState({
      dev1:{}, dev2:{}, dev3:{}, dev4:{}, dev5:{}, dev6:{}, dev7:{}, dev8:{}, dev9:{}, dev10:{}, dev11:{}, dev12:{},
    });
    const ref = firebase.database().ref('DevQuestions');
    ref.once('value', (snapshot) => {
      setDevData(snapshot.val());
    });

    return
};


export default contentList;
