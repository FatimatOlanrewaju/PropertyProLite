import User from '../models/users';

class UserController {
  static userSignup(req, res) {
    if (
      !req.body.firstName
        && !req.body.lastName
        && !req.body.email
        && !req.body.phoneNumber
        && !req.body.password
        && !req.body.address
    )
    {
      return res.status(400).json({
        status: 400,
        message: 'All fields are required',
      });
    }
    const signupDetails = User.addUser(req.body);
    return res.status(201).json({
      status: 201,
      message: 'Account Created Successfully',
    });
  }
}

export default UserController;
