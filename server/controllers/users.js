import users from '../data/users.data';
import User from '../models/users';

class UserController {
  static userSignup(req, res) {
    if (!req.body.firstName && !req.body.lastName && !req.body.email && !req.body.phoneNumber && !req.body.password && !req.body.address) {
      return res.status(400).json({
        status: 400,
        message: 'All fields are required',
      });
    }

    const checkUserExists = users.find(user => user.email === req.body.email);npm
    if (checkUserExists) {
      return res.status(409).send({
        status: 409,
        message: 'User already exists',
      });
    }

    return res.status(201).json({
      status: 201,
      message: 'Account Created Successfully',
    });
  }

  static userSignin(req, res) {
    if (!req.body.email && !req.body.password) {
      return res.status(400).json({
        status: 400,
        message: 'Enter Email and Password',
      });
    }

    if (
      !req.body.email || !req.body.password) {
      return res.status(400).json({
        status: 400,
        message: 'Enter Email or Password',
      });
    }

    const signinDetails = req.body;
    return res.status(200).json({
      status: 200,
      message: 'User logged In',
    });
  }
}

export default UserController;
