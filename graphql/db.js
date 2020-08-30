import fetch from "node-fetch";
import { API_KEY } from "../config/key"

const API_URL = "https://api.nexon.co.kr/kart/v1.0/users/nickname/";

export const getUser = (usrName) => {
  let REQUEST_URL = API_URL + encodeURI(usrName);
  return fetch(REQUEST_URL,{
    method: 'get',
    headers: {
      'Content-Type': 'euc-kr',
      'Authorization': API_KEY
    }
  })
  .then(res => res.json())
  .then(json => json)
};