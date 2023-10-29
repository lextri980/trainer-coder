export const otpRegex = /^[0-9]{1,6}$/
export const yearRegex = /^(19|20)\d{2}$/
export const phoneNumberRegex = /(84|0[1|2|3|4|5|6|7|8|9])+([0-9]{8})\b/
export const passwordRegex = /(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%&*()]).{8,}/
export const creditCardRegex = /^(?:3[47][0-9]{13})$/
export const urlRegex = /^(http[s]?:\/\/){0,1}(www\.){0,1}[a-zA-Z0-9.-]+.[a-zA-Z]{2,5}[.]{0,1}/