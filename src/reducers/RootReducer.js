import {combineReducers} from 'redux'
import PokemonListReducer from '../reducers/PokemonListReducer'
const RootReducer=combineReducers({
   pokemonList: PokemonListReducer,
})
export default RootReducer;