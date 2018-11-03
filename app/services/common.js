import axios from 'axios';
import { update } from '../state/actions/credentials';

const client = axios.create({
    baseURL: 'http://192.168.1.226:3000/',
    headers: {
      "Accept": "application/json",
      "Content-Type": "application/json"
    },
    responseType: 'json'
});

const insertCredentials = ({getState, dispatch}, request) => {
  request.headers = {...request.headers, ...getState().credentials};
  return request;
}

const readCredentials = async ({getState, dispatch}, response) => {
  await dispatch(update_credentials(response));
  return response;
}

const interceptors = {
  request: [
    insertCredentials
  ],
  response: [
    readCredentials
  ]
};

const update_credentials = success => {
  const { headers } = success;
  return update({
    "access-token": headers["access-token"],
    "token-type": headers["token-type"],
    "client": headers["client"],
    "uid": headers["uid"],
    "expiry": headers["expiry"]
  });
}

export {
  client,
  interceptors,
  update_credentials
};
