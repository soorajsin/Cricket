import React, { useEffect, useState } from "react";
import { allMatchesList } from "../Api";

const AllMatchesShow = () => {
  const [match, setMatch] = useState([]);

  useEffect(() => {
    const allMatch = async () => {
      try {
        const response = await fetch(allMatchesList());

        const data = await response.json();
        console.log(data);
        setMatch(data);
      } catch (error) {
        console.log(error + " not fetch api");
      }
    };

    allMatch();
  });

  return (
    <>
      <div className="allmatches">
        <div className="containerAll">
          <h1>Todos los partidos</h1>
          {match.reason}
        </div>
      </div>
    </>
  );
};

export default AllMatchesShow;
