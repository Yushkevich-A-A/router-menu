import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Menu from './Components/Menu/Menu';
import DriftPage from './Pages/DriftPage/DriftPage';
import ForzaPage from './Pages/ForzaPage/ForzaPage';
import HomePage from './Pages/HomePage/HomePage';
import TimeAttackPage from './Pages/TimeAttackPage/TimeAttackPage';

import './App.css';

function App() {
  return (
    <Router>
      <div>
        <Menu />
        <div className="page">
          <Switch>
            <Route path="/" component={HomePage} />
            <Route path="/drift" component={DriftPage} />
            <Route path="/timeattack" component={TimeAttackPage} />
            <Route path="/forza" component={ForzaPage} />
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
