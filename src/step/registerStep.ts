import axios from "axios";
import { RegisterPayload } from "../model/registerPayload";

// require('dotenv').config({path: __dirname + '/.env'});

const BASE_URL = "https://reqres.in/api/"
const REGISTER = "register"

export const registerUser = (payload: RegisterPayload) => {
    return axios.post(BASE_URL + REGISTER, payload)
};

