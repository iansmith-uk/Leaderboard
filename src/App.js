import React, { useState } from 'react';
import { InputForm } from './Components/InputForm';
import { OutputLeaderboard } from "./Components/OutputLeaderboard";

function App() {
  const [leaderboard, setLeaderBoard] = useState([]);
  const updateLeaderboardArray = eachEntry => { 
    setLeaderBoard([...leaderboard, eachEntry]);
    leaderboard.sort(function(a, b){
      return a[2] - b[2];
    }); //sorts by score
  };

  return (
    <div className="container mt-4">
      <InputForm updateLeaderboardArray={updateLeaderboardArray} />
      <OutputLeaderboard setLeaderboard={setLeaderBoard} leaderboard={leaderboard} />
    </div>
  );
}

export default App;
