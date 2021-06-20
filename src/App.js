import 'bootstrap/dist/css/bootstrap.min.css'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom'

import Navbar from './Components/Navbar'
import SpeedCheck from './Components/speedcheck/SpeedCheck';
import Results from './Components/results/Results'
import Texts from './Components/texts/Texts'
import { ThemeContext } from './Contexts/ThemeContext'

function App() {
  return (
    <ThemeContext.Consumer>{(context) => {
      //const { isDarkTheme, dark, light } = context;
      const theme = context.getTheme();
      return (
        <div className={`app-layout ${theme.app}`}>
          <div className="container pt-1">
            <Router>
              <Navbar />
              <Switch>
                <Route component={SpeedCheck} exact path="/" />
                <Route component={Results} path="/results" />
                <Route component={Texts} path="/texts" />
              </Switch>
            </Router>
          </div>
        </div>
      )
    }}

    </ThemeContext.Consumer>
  );
}

export default App;
