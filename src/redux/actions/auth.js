import { } from '../apis/auth';





export function setUser(user) {
  return dispatch => {
    dispatch({
      type: SET_USER,
      user
    })
  }
}

export const SET_USER = 'SET_USER';


// export function login(data) {
//   return dispatch => {
//     dispatch({
//       type: REQUEST_LOGIN
//     })
//     return new Promise((resolve, reject) => {
//       loginAPI(data)
//         .then(({ status, message, ...user }) => {
//           const { info, access_token } = user;
//           //User Logged in sucessfully 
//           if (status === 201) {
//             dispatch({
//               type: LOGIN_SUCCESSFULL,
//               data: { ...info, access_token }
//             })
//             toast.success(message || 'Logged in successfully');
//             return resolve({ ...info, access_token })
//           }
//           //User has to fill OTP first 
//           if (status === 205) {
//             dispatch({
//               type: LOGIN_FALED
//             })
//             // dispatch({
//             //   type: OPEN_MODAL_DIALOG,
//             //   data,
//             //   modal: "PHONE_NUMBER_VERIFICATION"
//             // })
//             toast.success(message || 'Logged in successfully');
//             return reject()
//           }
//         })
//         .catch(err => {
//           dispatch({
//             type: LOGIN_FALED
//           })
//           toast.error(err && err.response && err.response.data && err.response.data.message || 'Something went wrong!')
//           return reject(err)
//         })
//     })
//   }
// }

// export const REQUEST_LOGIN = 'REQUEST_LOGIN';
// export const LOGIN_SUCCESSFULL = 'LOGIN_SUCCESSFULL';
// export const LOGIN_FALED = 'LOGIN_FALED';


// export function logout() {
//   return dispatch => {
//     return new Promise((resolve, reject) => {
//       logoutAPI()
//         .then((res) => {
//           dispatch({
//             type: REQUEST_LOGOUT
//           })
//           return resolve(res)
//         })
//         .catch(err => {
//           // toast.error(err && err.message || 'Something went wrong!')
//           return reject(err)
//         })
//     })
//   }
// }

// export const REQUEST_LOGOUT = 'REQUEST_LOGOUT';