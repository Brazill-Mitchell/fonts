import * as actions from './actions'
// import { screenSizes } from "../../functions/responsive"

const initialState = {
    testValue: "test value"
}

// eslint-disable-next-line import/no-anonymous-default-export
export default (state = initialState, act) => {

    switch(act.type){
        case "testValue": return {...state.testValue}
        default: return state
    }
}