import './App.css';
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import AboutMe from "./pages/AboutMe/AboutMe";
import MyOnlineCV from "./pages/MyOnlineCV/MyOnlineCV";
import RoboApp from './pages/ShowOff/RoboApp';
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Projects from './pages/Projects/Projects';

function App() {
  return (
    <>
      <Router>
        <div className="app">
          <Header />
          <Switch>
            <Route path="/Myonlinecv" component={MyOnlineCV} />
            <Route path="/Projects" component={Projects} />
            <Route path="/Showoff" component={RoboApp} />
            <Route path="/" component={AboutMe} />
          </Switch>

        </div>
      </Router>
      <Footer className="footer" />
    </>
  );
}

export default App;
