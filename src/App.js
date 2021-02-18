import React from 'react'
import axios from 'axios'
import './App.css';

function App() {
React.useEffect(() => {
 
  console.log('object')
}, [])

 const handleClick = async () => {
   try{
    const res = await axios.get('/getOrg')
    console.log({res})
   }catch(e){
     console.log(e.message)
   }
   
   console.log("clicked")
 }
  return (
    <div className="App">
      <button onClick={handleClick} > Get Data  </button>
    </div>
  );
}

export default App;
