import fetch from "node-fetch";
import { API_KEY } from "../config/key";

const API_URL = "https://api.nexon.co.kr/kart/v1.0/users/nickname/";
const MATCH_INFO_URL = "https://api.nexon.co.kr/kart/v1.0/users/";
const MATCH_MEMBER_INFO_URL = "https://api.nexon.co.kr/kart/v1.0/matches/";

export const getUserId = (usrName) => {
  let REQUEST_URL = API_URL + encodeURI(usrName);
  return fetch(REQUEST_URL, {
    method: "get",
    headers: {
      Authorization: API_KEY,
    },
  })
    .then((res) => res.json())
    .then((json) => json);
};

export const getMatch = (usrId) => {
  let REQUEST_MATCH_INFO_URL = MATCH_INFO_URL + usrId + "/matches?limit=200";
  return fetch(REQUEST_MATCH_INFO_URL, {
    method: "get",
    headers: {
      Authorization: API_KEY,
    },
  })
    .then((res) => res.json())
    .then((json) => json.matches);
};

export const getMatchMemberByIndi = (matchId) => {
  let REQUEST_MATCH_MEMBER_INFO_URL = MATCH_MEMBER_INFO_URL + matchId;
  return fetch(REQUEST_MATCH_MEMBER_INFO_URL, {
    method: "get",
    headers: {
      Authorization: API_KEY,
    },
  })
    .then((res) => res.json())
    .then((json) => json.players);
};

export const getMatchMemberByTeam = (matchId) => {
  let REQUEST_MATCH_MEMBER_INFO_URL = MATCH_MEMBER_INFO_URL + matchId;
  return fetch(REQUEST_MATCH_MEMBER_INFO_URL, {
    method: "get",
    headers: {
      Authorization: API_KEY,
    },
  })
    .then((res) => res.json())
    .then((json) => json.teams);
};
