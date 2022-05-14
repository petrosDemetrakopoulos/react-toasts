import React from 'react'
import './App.css'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  const notifyDefault = () => toast("A toast alert!");
  const notifyTimeout = () => toast("Dismiss after 8 secs", {autoClose: 8000});
  const notifyTopLeft = () => toast("This appears on top left corner", {position: 'top-left'});
  const notifyNotBar = () => toast("This does not have the bar", {hideProgressBar: true});
  return (
    <div className="App">
      <div style={{ marginTop: '2em' }}>
        <button onClick={notifyDefault}>Show default toast</button> <br></br>
        <button onClick={notifyTimeout}>Dismiss after 8 seconds</button>  <br></br>
        <button onClick={notifyTopLeft}>Appears top left</button>  <br></br>
        <button onClick={notifyNotBar}>No bar</button>
      </div>
      <ToastContainer />
    </div>
  )
}

export default App
