const defaultState={
    loading:false,
    data:{},
    errorMsg:""
}
const PokemonListReducer=(state = defaultState,action)=>{
    switch(action.type){
        case "POKEMON_LIST_LOADING":{
            return {...state,
            loading:true
            }
        }
        case "POKEMON_LIST_FAIL":{
            return {...state,
            loading:false,
            errorMsg:"unable to get pokemon"
            }
        }
        case "POKEMON_LIST_SUCCESS":{
            return {...state,
            //loading:true,
            data:action.payload
            }
        }
        default:
            return state;
    }
}
export default PokemonListReducer;