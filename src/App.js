import * as React from 'react';
import { useState } from 'react';
import '@fontsource/roboto';
import Header from './components/Header';
import Output from './components/Output';
import Input from './components/Input';

function App() {
  const [calc, setCalc] = useState(
    [
      [7,4,1,0],
      [8,5,2,'.'],
      [9,6,3,'+/-'],
      ['del', 'x', '+','Ans'],
      ['AC', '/', '-', '='],
    ]
  )
  return (
    <div className='container'>
       <Header />
       <Output />
       <Input calcInfo={calc}/>
    </div>
  )
}



export default App;
