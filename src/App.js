import React from 'react'
import axios from 'axios'
import './App.css';

function App() {
React.useEffect(() => {
 
  console.log('object')
}, [])

 const handleClick = async () => {
   try{
    const res = await axios.get('/api/users /getAllUsers')
    console.log({res})
   }catch(e){
     console.log(e.message)
   }
   
   console.log("clicked")
 }

 const handlePost = async () => {
  try{
    const fd = new FormData();
    fd.append("data", 'from Front-end');
    fd.append("id", 2);
    const obj = {
      email: "abc@gmail.com",
      password:"123456",
      role: "teacher"
    }
    const js = JSON.stringify(obj)
    const res = await axios.post("/api/users/login",obj);
    console.log({res})
  }catch(e) {console.log(e.message)}
 }

 const handleDelete = async () => {
  try{
    const fd = new FormData();
    fd.append("id", 2);
    const res = await axios.delete("/delete",fd);
    console.log({res})
  }catch(e) {console.log(e.message)}
 }

  return (
    <div className="App">
      <button onClick={handleClick} > Get Data  </button>
      <button onClick={handlePost} > Post data  </button>
      <button onClick={handleDelete} > delete data  </button>
    </div>
  );
}

export default App;
