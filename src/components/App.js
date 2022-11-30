import React, {useState, useEffect} from "react";
import { Segment } from "semantic-ui-react";
import "../stylesheets/App.css";
import WestworldMap from "./WestworldMap";
import Headquarters from "./Headquarters";

function App() {

  const [displayHosts, setDisplayHosts] = useState([])

  useEffect(() => {
    fetch("http://localhost:3001/hosts")
    .then(res => res.json())
    .then(hosts => {
      console.log(hosts)
      setDisplayHosts(hosts)
    })
  }, [])

   


  return (
    <Segment id="app">
      {/* What components should go here? Check out Checkpoint 1 of the Readme if you're confused */}
      <WestworldMap />
      {/* <Headquarters displayHosts={displayHosts}/> */}
    </Segment>
  );
}

export default App;
