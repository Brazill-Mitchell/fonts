export const SET_SCREEN_SIZE = 'SET_SCREEN_SIZE'
export const setScreenSize = screenSize => ({
    type: SET_SCREEN_SIZE,
    screenSize: screenSize
})
export const SET_NAV_HEIGHT = 'SET_NAV_HEIGHT'
export const setNavHeight = navHeight => ({
    type: SET_NAV_HEIGHT,
    navHeight: navHeight
})
export const CURRENT_PAGE = 'CURRENT_PAGE'
export const setCurrentPage = page =>({
    type: 'CURRENT_PAGE',
    page: page
})
export const CURRENT_SECTION = 'CURRENT_SECTION'
export const setCurrentSection = section =>({
    type: 'CURRENT_SECTION',
    section: section
})