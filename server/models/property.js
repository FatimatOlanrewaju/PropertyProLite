import users from '../data/users.data';
import propertyData from '../data/property.data';


class Properties{
  postProperty(property) {
    const newProperty = {
      id:propertyData.length + 1,
      owner: users.length - 1,
      email: users.length - 1,
      price: parseFloat(property.price),
      state: property.state,
      address: property.address,
      city: property.city,
      type: property.type,
      image_url: property.image_url,
      created_on: new Date(),
    }
   
    propertyData.push(newProperty);
    return newProperty;
  }
}
export default new Properties();