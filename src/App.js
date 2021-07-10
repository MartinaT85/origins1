import Nav from './components/Nav';
import Home from './pages/Home';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import {Switch, Route, useLocation} from 'react-router-dom';

function App() {
  const location = useLocation();
  return (
    <>
      <Nav/>
      <Switch location={location} key={location.pathname}>
        <Route path='/' exact>
          <Home/>
        </Route>
        <Route path='/projects'>
          <Projects/>
        </Route>
        <Route path='/contact'>
          <Contact/>
        </Route>
      </Switch>
    </>
  );
}

export default App;
