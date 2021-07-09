import React from 'react'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'

import Proyects from './components/Proyects'
import AboutMe from './components/AboutMe'
import Tecnologies from './components/Tecnologies'
import AcademicTraining from './components/AcademicTraining'
import Contact from './components/Contact'
import NavBar from './components/NavBar'
import Home from './components/Home'

const App = () => {
  return (
    <div className="app">
      <Router>

        <NavBar></NavBar>

        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>

          <Route exact path="/proyects">
            <Proyects></Proyects>
          </Route>

          <Route exact path="/aboutMe">
            <AboutMe></AboutMe>
          </Route>

          <Route exact path="/tecnologies">
            <Tecnologies></Tecnologies>
          </Route>

          <Route exact path="/academicTraining">
            <AcademicTraining></AcademicTraining>
          </Route>

          <Route exact path="/contact">
            <Contact></Contact>
          </Route>

        </Switch>

      </Router>

    </div>
  );
}

export default App;
