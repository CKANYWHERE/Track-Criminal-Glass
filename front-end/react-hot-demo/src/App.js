import React from 'react';
import Track from './Track-Component/Track-Main'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';


const App = () => (
  <Route exact path = "/">
    <div>
      <Track variant="contained" color="primary">
      </Track>
    </div>
  </Route>
);

export default App;