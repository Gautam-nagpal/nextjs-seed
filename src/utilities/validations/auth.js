import { isEmpty } from "lodash";

const eRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
const passRegex = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/;

export function validateSignup(data = {}, isSocialLogin) {
  let errors = {};


  return {
    isValid: isEmpty(errors),
    errors
  }
}

export function validateLogin(data = {}) {
  let errors = {};

  // if (!data.phone) {
  //   errors.phone = "Phone number is required!";
  // }

  // if (data.phone && data.phone.length < 10) {
  //   errors.phone = "Phone number must be of 10 digits!";
  // }

  // if (data.phone && data.phone.length > 10) {
  //   errors.phone = "Invalid phone number!";
  // }

  return {
    isValid: isEmpty(errors),
    errors
  }
}

export function validatePhone(data = {}) {
  let errors = {};

  // if (!data.phone) {
  //   errors.phone = "Phone number is required!";
  // }

  // if (data.phone && data.phone.length > 10) {
  //   errors.phone = "Invalid phone number!";
  // }

  // if (data.phone && data.phone.length < 10) {
  //   errors.phone = "Phone number must be of 10 digits!";
  // }

  return {
    isValid: isEmpty(errors),
    errors
  }
}

export function validatePasswordOtp(data = {}) {

  let errors = {};

  // if (!data.phone) {
  //   errors.phone = "Phone number is required!";
  // }

  // if (data.phone && data.phone.length > 10) {
  //   errors.phone = "Invalid phone number!";
  // }

  // if (data.phone && data.phone.length < 10) {
  //   errors.phone = "Phone number must be of 10 digits!";
  // }


  // if (!data.otp) {
  //   errors.otp = "OTP is required!"
  // }

  // if ((data.otp && data.otp.length > 4) || (data.otp && data.otp.length < 4)) {
  //   errors.otp = "Invalid OTP"
  // }

  return {
    isValid: isEmpty(errors),
    errors
  }
}

export function validateVerify(data = {}) {
  let errors = {};

  // if (!data.code) {
  //   errors.code = "OTP is required!"
  // }

  // if ((data.code && data.code.length > 4) || (data.code && data.code.length < 4)) {
  //   errors.code = "Invalid OTP"
  // }

  return {
    isValid: isEmpty(errors),
    errors
  }
}