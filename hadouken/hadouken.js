const utils = require("./utils.js");



const user = {
  name: "",
  email: "gutok11otmail.com",
  age: 18,
  password: "Rafael@123",
  confirmPassword: "Rafael@123",
};

const data_array_log = [
  utils.isEmpty(user.name),
  utils.isEmpty(user.email),
  utils.isEmpty(user.age),
  utils.isEmpty(user.password),
  utils.isEmpty(user.confirmPassword)
]



const myUser = new Map();

myUser.set("name", user.name);
myUser.set("email", user.email);
myUser.set("age", user.age);
myUser.set("password", user.password);
myUser.set("confirmPassword", user.confirmPassword);

const formValid = () => {
 
  try {
    myUser.forEach(utils.formValid);
    const find_error = data_array_log.find(element => element == true);
    validate(find_error);
    password_verify(user.password, user.confirmPassword);
   
   
  } catch (e) {
    console.error(e);
  }
};

const password_verify = (pass, confirmPass) =>{
   if(pass !== confirmPass)
   {
    throw "password does not match";
   }else{
     return true;
   }
}

const validate = (variable) =>{
    if(variable !== true && utils.isEmail(user.email))
  {
    if(password_verify(user.password, user.confirmPassword))
    {
      console.log("User Valid");
    };
  }
}


formValid();
