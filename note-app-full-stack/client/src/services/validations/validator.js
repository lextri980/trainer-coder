import { creditCardRegex, passwordRegex, phoneNumberRegex, urlRegex, yearRegex } from "../regex";

export const validatorYearBorn = yearOfBirth => {
  const regex = yearRegex;
  const validValue = regex.test(yearOfBirth)
  return validValue
} 

export const validatorPositive = value => {
  if (value >= 0) {
    return true
  }
  return false
}

export const validatorPhoneNumber = phoneNumber => {
  /* eslint-disable no-useless-escape */
  const regExp = phoneNumberRegex
  /* eslint-enable no-useless-escape */
  const validPhoneNumber = regExp.test(phoneNumber)
  return validPhoneNumber
}

export const validatorPassword = password => {
  /* eslint-disable no-useless-escape */
  const regExp = passwordRegex
  /* eslint-enable no-useless-escape */
  const validPassword = regExp.test(password)
  return validPassword
}

export const validatorCreditCard = creditnum => {
  /* eslint-disable no-useless-escape */
  const cRegExp = creditCardRegex
  /* eslint-enable no-useless-escape */
  const validCreditCard = cRegExp.test(creditnum)
  return validCreditCard
}

export const validatorUrlValidator = val => {
  if (val === undefined || val === null || val.length === 0) {
    return true
  }
  /* eslint-disable no-useless-escape */
  const regex = urlRegex
  /* eslint-enable no-useless-escape */
  return regex.test(val)
}
