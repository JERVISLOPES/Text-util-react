import { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';

function App() {

  const[Mode, setMode] = useState('light');

  const toggleMode = () => {
    if (Mode === 'light') {
        setMode('dark');
        document.body.style.backgroundColor = 'grey';
    }
    else {
        setMode('light');
        document.body.style.backgroundColor = 'white';
    }
};

  return (
    <>
    <Navbar title="TextUtils" mode={Mode} toogleMode={toggleMode} />
    <div className='container pt-5' >
    <TextForm heading="Enter your text" mode={Mode} />
    </div>
    
    </>
  );
}

export default App;
