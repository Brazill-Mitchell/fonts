import * as actions from './actions.js'
import { screenSizes } from "../../responsive"

const initialState = {
    screenSize: screenSizes.COMPUTER,
    currentPage: '/home',
    currentSection: 'fonts',
    navHeight: 0,
    checkoutCount: 0
}

// eslint-disable-next-line import/no-anonymous-default-export
export default (state = initialState, act) => {

    switch(act.type){
        case actions.SET_SCREEN_SIZE: return {...state, screenSize:act.screenSize}
        case actions.SET_NAV_HEIGHT: return {...state, navHeight:act.navHeight}
        case actions.CURRENT_PAGE: return {...state, currentPage:act.page}
        case actions.CURRENT_SECTION: return {...state, currentSection:act.section}
        case actions.SET_CHECKOUT_COUNT: return {...state, checkoutCount:act.count}
        default: return state
    }
}