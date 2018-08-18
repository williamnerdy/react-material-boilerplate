import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Navigation from './Navigation';
import AppTabs from './AppTabs';

function App() {
  return (
    <React.Fragment>
      <CssBaseline />
      {true && <Navigation />}
      {false && <AppTabs />}
    </React.Fragment>
  );
}

export default App;
