const fetchLocation=(state={
    location:[]
    }, action)=>{
        if(action.type === "FETCH_LOCATION"){
            state= {...state, location: action.payload}
        }
    
        return state;
    };
    export default fetchLocation;