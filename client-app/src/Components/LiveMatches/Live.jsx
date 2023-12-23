import React, { useEffect, useState } from "react";
import { currentMatchesList } from "../Api";

const Live = () => {
  const [liveMatches, setLiveMatches] = useState([]);

  useEffect(() => {
    const fetchLiveMatches = async () => {
      try {
        const response = await fetch(currentMatchesList());

        const data = await response.json();

        if (data && data.matches) {
          console.log(data);
          setLiveMatches(data.matches);
        } else {
          console.log("Not data found");
        }
      } catch (error) {
        console.error("Error fetching live matches ", error);
      }
    };

    fetchLiveMatches();
  });

  return (
    <>
      <div className="live">
        <div className="containerLive">
          <h1>Live Streaming</h1>
          <div className="box">
            {liveMatches.map((match) => (
              <div key={match.unique_id} className="box">
                <p>Status: {match.matchStarted ? "Live" : "Not Live"}</p>
                <p>Team 1: {match["team-1"]}</p>
                <p>Team 2: {match["team-2"]}</p>
                <p>Match Type: {match.type}</p>
                {/* Add more details as needed */}
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Live;
