import axios from '../config/axios';

export const login = (username, password) =>
axios.post("/user/login", {
    username,
    password,
  })
  .then((res) => res.data);

export const createAccount = (email, username, phone, password) =>
axios.post("/user/createAccount", {
    email,
    username,
    phone,
    password,
  })
  .then((res) => res.data);