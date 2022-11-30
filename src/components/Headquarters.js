import React from "react";
import { Grid } from "semantic-ui-react";
import Details from "./Details";
import "../stylesheets/Headquarters.css";
import Host from "./Host"

function Headquarters({displayHosts}) {

  const splitHosts = displayHosts.map(singleHost => <Host key={singleHost.id} singleHost={singleHost} />)

  return (
    <Grid celled="internally">
      <Grid.Column width={8}>
        {splitHosts}
      </Grid.Column>
      <Grid.Column width={5}>
        <Details />
      </Grid.Column>
      <Grid.Column width={3}>
        {/* and here. Take visual cues from the screenshot/video in the Readme. */}
      </Grid.Column>
    </Grid>
  );
}

export default Headquarters;
