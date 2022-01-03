import logo from './logo.svg';
import './App.css';
import Header from './Components/Header';
import Pets from './Pages/Pets';
import MetaMask from './DAppModules/WalletConnection/config';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import PetDetail from "./Pages/PetDetail"
import NewPet from "./Pages/NewPet"
import Store from "./Pages/Store"
import Home from "./Pages/Home"

function App() {
  return (
    <div className="background">
      <Router>
        <Header />
        <Route exact path="/home">
          <Home />
        </Route>
        <Switch>
          <Route exact path="/pets">
            <Pets />
          </Route>
          <Route exact path="/pets/:id">
            <PetDetail />
          </Route>
          <Route exact path="/new">
            <NewPet />
          </Route>
          <Route exact path="/store">
            <Store />
          </Route>
          <Redirect to="/home"/>
        </Switch>
      </Router>

    </div>
  );
}

export default App;
