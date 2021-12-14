import './App.scss';
import Navbar from './Components/Navbar/Navbar';
import Main from './Components/Main/Main';
import Background from './Components/Background/Background';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

function App() {
  return (
    <Router >
    <div className='app'>
      <Navbar/>
      <Main />
      <Background />
    </div>
    </Router>
  );
}

export default App;
