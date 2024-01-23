import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.js'
import './App.css';
import { Header } from './Components/Header';
import { Personal } from './Components/Personal';
import { Ordering } from './Components/Ordering';

function App() {
  return (
    <div className="App">
      <Header />
      <div class="row ms-3 mt-4">
        <Personal />
      </div>
      <div class="row ms-3">
        <Ordering />
      </div>
    </div>
  );
}

export default App;
