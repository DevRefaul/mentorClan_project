import { combineReducers } from "redux";

let initialState = []

const userInfo = (state = initialState, action) => {

    switch (action.type) {
        case "USER_INFO":
            return state = action.users;
        default:
            return state
    }
}


const reducers = combineReducers({ userInfo })

export default reducers