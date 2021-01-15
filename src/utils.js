import axios from 'axios';
import { BASE_URL } from './constants';



export function generateUrl(path) {

  return BASE_URL + path;
}

export function apiReq(endPoint, data, method, headers) {
  return new Promise((resolve, reject) => {

    headers = {
      ...headers,
    }


    headers = {
      ...headers
    }
    const accessToken = getData(AccessTokenId);

    if (accessToken) {
      headers = {
        ...headers,
        Authorization: `Bearer ${accessToken}`
      }
    }

    if (method == 'get' || method == 'delete') {
      data = {
        params: data,
        headers
      }
    }

    axios[method](endPoint, data, { headers }).then(({ data, status: httpStatus }) => {
      const { status } = data;
      if (httpStatus === 500) {
        return reject(data);
      }

      if ((status === 201) || (httpStatus === 200)) {
        return resolve(data);
      }

      if ((status === 205) || (httpStatus === 200)) {
        return resolve(data)
      }

      if ((status === 200) || (httpStatus === 200)) {
        return resolve(data)
      }


      return reject(data)
    }).catch((err) => {
      return reject(err);
    });
  })
}

export function apiPost(endPoint, data, headers = {}) {
  return apiReq(generateUrl(endPoint), data, 'post', headers);
}

export function apiDelete(endPoint, data, headers = {}) {

  return apiReq(generateUrl(endPoint), data, 'delete', headers);
}

export function apiGet(endPoint, data, headers = {}) {
  return apiReq(generateUrl(endPoint), data, 'get', headers);
}

export function apiPut(endPoint, data, headers = {}) {
  return apiReq(generateUrl(endPoint), data, 'put', headers);
}


export const scrollIntoView = (label) => {
  var elmnt = document.getElementById(label);

  if (elmnt) {
    setTimeout(() => {
      elmnt.scrollIntoView({ behavior: "smooth", block: "center" });
    }, 5);
  }
}


export function getData(label) {
  const data = window && window.localStorage.getItem(label);
  return JSON.parse(data)
}

export function setData(label, data) {
  if (window && window.localStorage)
    localStorage.setItem(label, JSON.stringify(data));
}

export function removeData(label) {
  if (window && window.localStorage)
    localStorage.removeItem(label);
}


export function saveObject(key, value) {
  if (window && window.localStorage) {
    window.localStorage.setItem(key, value);
  }
}

export function getObject(key) {
  if (window && window.localStorage) {
    return window.localStorage.getItem(key);
  }
}


