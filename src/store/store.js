import logger from "redux-logger";
import thunk from "redux-thunk"; 
import { applyMiddleware, createStore } from "redux"; 

import Reducers from "../reducers/reducers"; 

const middleware= applyMiddleware(logger, thunk);

const StoreRef= createStore(Reducers, middleware);

export default StoreRef;
