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
import AboutUs from './Pages/AboutUs';
import NervosContext, {NervosProvider} from "./Contexts/NervosContext";
import { Web3ReactProvider } from "@web3-react/core";
import { Web3Provider as ww } from "@ethersproject/providers";



function getLibrary(provider) {
  var library;

  if (provider?.chainType === "hmy") {
    library = provider.blockchain;
  } else {
    library = new ww(provider);
    library.pollingInterval = 12000;
  }

  return library;
}

function App() {
  return (
    <>
        <Web3ReactProvider getLibrary={getLibrary}>

    <NervosProvider>
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
          <Route exact path="/aboutus">
            <AboutUs />
          </Route>
          <Redirect to="/home" />
        </Switch>
      </Router>

    </div>
    </NervosProvider>
    </Web3ReactProvider>
    </>
  );
}

export default App;
