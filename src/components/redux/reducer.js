import * as actions from './actions.js'
// import { screenSizes } from "../../functions/responsive"

const initialState = {
    currentPage: '/home',
    currentSection: 'fonts'
}

// eslint-disable-next-line import/no-anonymous-default-export
export default (state = initialState, act) => {

    switch(act.type){
        case actions.CURRENT_PAGE: return {...state, currentPage:act.page}
        case actions.CURRENT_SECTION: return {...state, currentSection:act.section}
        default: return state
    }
}