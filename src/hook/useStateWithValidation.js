import {useState} from "react";

export const numberValidator = (text) => {
  return text.split('')
      .filter((v)=> !'0123456789'.includes(v))
      .length === 0
}

export const useStateWithValidation = (defaultValue, validator) => {
  const [value, setValue] = useState(defaultValue);

  const setValidatedValue = (newValue) => {
    if(validator(newValue)) {
      setValue(newValue);
    }
  }

  return [value, setValidatedValue]
}