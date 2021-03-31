import logo from './logo.svg';
import './App.css';

import UserManager from './components/UserManager';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Users</h1>
      </header>
          <UserManager />
    </div>
  );
}

export default App;
