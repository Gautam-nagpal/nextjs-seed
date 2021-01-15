import { SET_USER } from '@actions/auth';

const initialState = {
  user: {},
  isLoading: false,
  isLoggedIn: false,
  userPhone: ""
}

export default function (state = { ...initialState }, action) {
  switch (action.type) {

    case SET_USER:
      return { ...state, user: action.user, isLoggedIn: true }


    default:
      return state
  }
}