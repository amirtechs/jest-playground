// constant/registerData.ts

import { RegisterPayload } from "../model/registerPayload";



export const validRegisterData: RegisterPayload = {
  email: 'eve.holt@reqres.in',
  password: 'pistol',
};

export const missingPassword: RegisterPayload = {
  email: 'eve.holt@reqres.in',
  password: '',
};
