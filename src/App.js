import './App.scss';
import Navbar from './Components/Navbar/Navbar';
import Main from './Components/Main/Main';
import Background from './Components/Background/Background';

function App() {
  return (
    <div className='app'>
      <Navbar/>
      <Main />
      <Background />
    </div>
  );
}

export default App;
