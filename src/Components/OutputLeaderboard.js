import React from "react";
import { Row, Col, Table, Button } from 'reactstrap';
import './table.css';
import { useRef } from 'react';

export const OutputLeaderboard = props => {
    const {leaderboard, setLeaderboard} = props;
  return (
    <div className="mt-4">
      <Row>
        <Col sm="12" md={{ size: 6, offset: 3 }}>
          <Table hover>
            <thead>
              <tr>
                <th>#</th>
                <th>Name</th>
                <th>Score</th>
              </tr>
            </thead>
            <tbody>
              <RenderTableData setLeaderboard={setLeaderboard} leaderboard={leaderboard} />
            </tbody>
          </Table>
        </Col>
        </Row>
    </div>
  );
};
const RenderTableData = props => {
  const { leaderboard, setLeaderboard } = props;
  var count = 0;
  const finalArray = leaderboard.sort((a, b) => b.score - a.score);
  const idRef = useRef();

  const handleRemove = (id, e) => {
    var currentBoard = leaderboard; //create copy of leaderboard
    currentBoard.splice(id,1); //remove the score
    setLeaderboard([...currentBoard]);//set the leaderboard in app.js
    
  }

  return Object.keys(finalArray).map((i, o) => {
    const { player, score } = finalArray[i];
    count = count + 1;

    var htmlFor1st = "";
    

    if(count === 1){
      htmlFor1st = 'first';
    }
    else if(count === 2){
      htmlFor1st = 'second';
    }
    else if(count === 3){
      htmlFor1st = 'third';
    }

    return (
      <tr id={count.toString(10) - 1} key={count.toString(10)} className={htmlFor1st}>
        <th scope="row" ref={idRef}>{count.toString(10)}</th>
        <td>{player}</td>
        <td>{score}</td>
        <td><Button className="btn btn-error" onClick={(e) => handleRemove(count.toString(10) - 1)}>Delete</Button></td>
      </tr>
    );
    
  });
  
};

