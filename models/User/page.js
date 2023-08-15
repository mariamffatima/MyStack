const mongoose = require('mongoose');

const LoginSchema = new mongoose.Schema(
  {
    email: {
      type: String,
      require: true,
      unique:true
    },
    name: {
      type: String,
      require: true
    },
  },
  { timestamps: true }
);

const SignupSchema = new mongoose.Schema(
  {
    email: {
      type: String,
      require: true,
      unique:true
    },
    Fname: {
      type: String,
      require: true,
    },
    Lname: {
      type: String,
      require: true,
    },
    password: {
      type: String,
      require: true,
    },
  },
  { timestamps: true }
);


const Login = mongoose.models.Login || mongoose.model('Login', LoginSchema);
const Signup = mongoose.models.Signup || mongoose.model('Signup', SignupSchema);

export { Login, Signup };
