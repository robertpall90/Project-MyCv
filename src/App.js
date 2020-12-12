import './App.css';
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import AboutMe from "./Pages/aboutMe/aboutMe";
import MyOnlineCV from "./Pages/myOnlineCV/myOnlineCV";
import RoboApp from './Pages/showOff/RoboApp';
import Footer from "./Components/Footer";
import Header from "./Components/Header";

function App() {
  return (
    <>
      <Router>
        <div className="app">
          <Header />
          <Switch>

            <Route path="/myonlinecv" component={MyOnlineCV} />
            <Route path="/showoff" component={RoboApp} />
            <Route path="/" component={AboutMe} />
          </Switch>

        </div>
      </Router>
      <Footer className="footer" />
    </>
  );
}

export default App;
