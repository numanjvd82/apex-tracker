import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
// React Components
import Home from './pages/Home/Home';
import Stats from './pages/Stats/Stats';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/stats/:gamename" component={Stats} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
