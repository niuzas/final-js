import logo from './logo.svg';
import './App.css';

import UserManager from './components/UserManager';
import LANG from './translations/LANG'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>{LANG.users}</h1>
      </header>
          <UserManager />
    </div>
  );
}

export default App;
