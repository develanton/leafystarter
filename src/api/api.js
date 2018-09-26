import axios from "axios";
//require('dotenv').config();

const keys = process.env.REACT_APP_AIR_KEY;

export default {

  airQuality: function () {
    return axios.get('https://api.airvisual.com/v2/nearest_city?key=' + keys);
  },

  getArticles: function () {
    return axios.get(process.env.REACT_APP_API_URL + "/api/blog");
  },

  allProjects: function () {
    return axios.get(process.env.REACT_APP_API_URL + '/api/projects');
  },

  singleProject: function (id) {
    console.log(process.env.REACT_APP_API_URL + '/api/project/', id);
    return axios.get(process.env.REACT_APP_API_URL + '/api/project/', id);
  },

  submitForm: function (formData) {
    return axios.post(process.env.REACT_APP_API_URL + '/api/projects', formData);
  },

  logGoogle: function (loginData) {
    return axios.get(process.env.REACT_APP_API_URL + '/auth/google', loginData);
  },
  
  submitLogin: function (loginData) {
    return axios.post(process.env.REACT_APP_API_URL + '/auth/login', loginData);
  },

  registerForm: function (registerData) {
    return axios.post(process.env.REACT_APP_API_URL + '/auth/signup', registerData);
  }

};