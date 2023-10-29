import { extend, localize } from "vee-validate";
import {
  alpha as rule_alpha,
  alpha_dash as rule_alpha_dash,
  alpha_num as rule_alpha_num,
  between as rule_between,
  confirmed as rule_confirmed,
  digits as rule_digits,
  email as rule_email,
  integer as rule_integer,
  length as rule_length,
  max as rule_max,
  min as rule_min,
  regex as rule_regex,
  required as rule_required,
} from "vee-validate/dist/rules";
import vi from "./lang/vi-validate.json";

import {
  validatorCreditCard,
  validatorPassword,
  validatorPhoneNumber,
  validatorPositive,
  validatorUrlValidator,
  validatorYearBorn,
} from "./validators";

// ////////////////////////////////////////////////////////
// General
// https://vee-validate.logaretm.com/v3/guide/rules.html#rules
// ////////////////////////////////////////////////////////

export const required = extend("required", rule_required);

export const email = extend("email", rule_email);

export const min = extend("min", rule_min);

export const max = extend("max", rule_max);

export const confirmed = extend("confirmed", rule_confirmed);

export const regex = extend("regex", rule_regex);

export const between = extend("between", rule_between);

export const alpha = extend("alpha", rule_alpha);

export const integer = extend("integer", rule_integer);

export const digits = extend("digits", rule_digits);

export const alphaDash = extend("alpha-dash", rule_alpha_dash);

export const alphaNum = extend("alpha-num", rule_alpha_num);

export const length = extend("length", rule_length);

export const yearBorn = extend("year-born", {
  validate: validatorYearBorn,
});

export const phoneNumber = extend("phone", {
  validate: validatorPhoneNumber,
  message: "Please enter valid phone number",
});

export const positive = extend("positive", {
  validate: validatorPositive,
  message: "Please enter positive number!",
});

export const credit = extend("credit-card", {
  validate: validatorCreditCard,
  message: "It is not valid credit card!",
});

export const password = extend("password", {
  validate: validatorPassword,
  message:
    "Your {_field_} must contain at least one uppercase, one lowercase, one special character and one digit",
});

export const url = extend("url", {
  validate: validatorUrlValidator,
  message: "URL is invalid",
});

// Install other localizations.
localize({
  vi: {
    messages: vi.messages,
    names: {
      password: "mật khẩu",
      ["confirm-password"]: "Xác nhận mật khẩu",
      phone: "số điện thoại",
      fullname: "họ và tên",
    },
  },
});
//Load language all page is Vietnamese
localize("vi");
