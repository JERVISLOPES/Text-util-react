import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';

function App() {
  return (
    <>
    <Navbar />
    <div className='container pt-5' >
    <TextForm heading="Enter your text" />
    </div>
    
    </>
  );
}

export default App;
