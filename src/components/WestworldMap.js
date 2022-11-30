import React, {useEffect, useState} from "react";
import { Segment } from "semantic-ui-react";
import Area from "./Area";

function WestworldMap() {

  const [areaToDisplay, setAreaToDisplay] = useState([])

  useEffect(() => {
    fetch(`http://localhost:3001/areas`)
    .then(res => res.json())
    .then(areas => {
      console.log(areas)
      setAreaToDisplay(areas)
    })
  },[])

  const displayAreas = areaToDisplay.map(area => <Area key={area.id} area={area} />)

  return <Segment id="map">{displayAreas}</Segment>
  
}

export default WestworldMap;
