import axios from "axios";

export const register = (newUser) => {
  return axios
    .post("https://dry-wave-28291.herokuapp.com/signup", {
      username: newUser.username,
      email: newUser.email,
      password: newUser.password,
    })
    .then((response) => {
      localStorage.setItem("usertoken", response.data.token);
      console.log(response.data.message);
      if (response.data.message === "Email is already in use") {
        alert("Email is already in use, Please try another");
      } else {
        alert("Signed up successfully!!!!");
      }
      return response.data.token;
    })
    .catch((err) => {
      console.log(err);
    });
};

export const login = (user) => {
  return axios
    .post("https://dry-wave-28291.herokuapp.com/signin", {
      email: user.email,
      password: user.password,
    })
    .then((response) => {
      localStorage.setItem("usertoken", response.data.token);
      console.log(response.data.message);
      if (response.data.message === "You're already logged in") {
        alert("You're already logged in!!!!!!!");
      }
      return response.data.token;
    })
    .catch((err) => {
      console.log(err);
      return alert("Invalid credentials");
    });
};
