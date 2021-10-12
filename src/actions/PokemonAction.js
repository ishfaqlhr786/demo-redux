import axios from 'axios'
export const GetPokemonList=(page) => async dispatch => {
    try{

        dispatch({
            type:"PKEMON_LIST_LOADING"
        })
        const perPage=15;
        const offset=(page * perPage)- perPage
//const res= await axios.get(`https://jsonplaceholder.typicode.com/posts`).then(res => {
    const res= await axios.get(`https://pokeapi.co/api/v2/pokemon?limit=${perPage}&offset=${offset}`).then(res => {
    //const persons = res.data;
   // setData(res.data);
   console.log(res.data)
  })

dispatch({
    type:"PKEMON_LIST_SUCCESS",
    payload:res.data
})  

} catch(e){
    dispatch({
        type:"PKEMON_LIST_FAIL",
        
    })  
    }
    return(
        <div>
            {
              
            }
        </div>
    )
}
