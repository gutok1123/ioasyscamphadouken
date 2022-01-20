const isEmpty = (value) => {
  if (typeof value === "string") {
    return !value;
  }

  if (typeof value === "number") {
    return false;
  }

  if (typeof value === "boolean") {
    return false;
  }

  return true;
};

const isEmail = (value) =>
  value.match(
    /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  );


const formValid = (value, key ) => {
 
  
  if (isEmpty(value)) {
    // throw `${key} is empty`;
    console.log(`${key} is empty`);
    // console.log(data_array);
  }

  

  if (key === "email" && !isEmail(value)) {
    console.log(`${value} is not email`);
  }
};

module.exports = { isEmpty, formValid, isEmail};
