import React from 'react'
import './App.css'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  const notifyDefault = () => toast("Wow so easy!");
  return (
    <div className="App">
      <div style={{ marginTop: '2em' }}>
        <button onClick={notifyDefault}>Show default toast</button>
      </div>
      <ToastContainer />
    </div>
  )
}

export default App
