import React, { useEffect, useState } from 'react'
import {currentMatchesList} from "../Api";

const Live = () => {

  const [liveMatches, setLiveMatches]=useState([]);
  const [loading, setLoading]=useState(true);


  useEffect(()=>{
    const fetchLiveMatches=async()=>{
      try {
        const response=await fetch(currentMatchesList());

        const data=await response.json();

        if(data){
          setLiveMatches(data);
        }else{
          console.log("Not data found");
        }
      } catch (error) {
        console.error("Error fetching live matches ", error)
      }
    }

    fetchLiveMatches();
  })


  return (
   <>
    <div className='live'>
      <div className='containerLive'>
        <h1>Live Streaming</h1>
      </div>
    </div>
   </>
  )
}

export default Live