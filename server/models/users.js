/* eslint-disable class-methods-use-this */
import users from '../data/users.data';

class User {
  addUser(user) {
    const newUser = {
      id: users.length + 1,
      email: user.email,
      firstName: user.firstName,
      lastName: user.lastName,
      address: user.address,
      password: user.password,
      isAdmin: false,
    };

    users.push(newUser);
    return newUser;
  }
}

export default new User();
