// import React from 'react';
// import './styles.css';
// import { Grid } from '@material-ui/core';
// import Search from './components/Search.js';

// export default function App() {
//   return (
//     // <Grid
//     //   className="App"
//     //   container
//     //   direction="column"
//     //   justifyContent="center"
//     //   alignitems="center"
//     // >
    
//    //  <h1>URL Shortener</h1>
//      <Search />
     
      
    
//   //  </Grid>
//   );
// }

import { useState } from 'react';
import './styles.css';
import BackgroundAnimate from './BackgroundAnimate.js';
import InputShortener from './InputShortener.js';
import LinkResult from './LinkResult.js';

function App() {
  const [inputValue, setInputValue] = useState("");

  return (
    <div className="container">
      <InputShortener setInputValue={setInputValue} />
      <BackgroundAnimate />
      <LinkResult inputValue={inputValue} />
    </div>
  );
}

export default App;