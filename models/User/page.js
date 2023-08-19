// "models/user/page.js"

const mongoose = require('mongoose');

const SigninSchema = new mongoose.Schema(
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


const Signin = mongoose.models.Signin || mongoose.model('Signin', SigninSchema);
const Signup = mongoose.models.Signup || mongoose.model('Signup', SignupSchema);

export { Signin, Signup };
