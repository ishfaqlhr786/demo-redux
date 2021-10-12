import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router,Link,NavLink,Switch,Route} from 'react-router-dom'
import PokemonList from './container/PokemonList';
import { Pokemon } from './container/Pokemon';
//import { ProductComponent } from './containers/ProductComponent';

function App() {
  return (
    <div className="App">
      <nav>
        <NavLink to="/pokemon/test" className="active">Search</NavLink>
      </nav>
   <Switch>
     <Route path="/" exact>
       <PokemonList/>
     </Route>
     <Route path="/pokemon/:pokemon">
       <Pokemon/>
     </Route>
   </Switch>
    </div>
  );
}

export default App;
