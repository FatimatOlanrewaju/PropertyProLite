import Property from '../models/property';
import propertyData from '../data/property.data';

class propertyController{
   postProperty(req, res) {
    if (!req.body.state && !req.body.city && !req.body.address && !req.body.type && !req.body.price && !req.body.image_url) {
      return res.status(400).json({
        status: 400,
        message: 'All fields are required',
      });
    }
    const newProperty = Property.postProperty(req.body);

    return res.status(201).send({
      status: 201,
      message: 'Property posted successfully',
      data: newProperty,
    });
  }

  updateProperty(req, res) {
    const property = propertyData.find(property => property.id === parseFloat(req.params.id));
    if(!property) {
      return res.status(404).json({
        status: 404,
        message: 'Property does not exist',
      });
    }

    const editProperty = {
      id: propertyData.id,
      price: property.price || req.body.price,
      address: property.address || req.body.address,
      state: property.state || req.body.state,
      type: property.type || req.body.type,
      city: property.city || req.body.city,
    };
    return res.status(200).json({
      status: 200,
      message: 'Property updated sucessfully',
      data: editProperty,
    });
  }

  markPropertyAsSold(req, res) {
    const property = propertyData.find(property => property.id === parseFloat(req.params.id));
    if(!property) {
      return res.status(404).json({
        status: 404,
        message: 'Property does not exist',
      });
    }
    if(!property.status) {
      return res.status(404).json({
        status: 404,
        message: 'Property status is required',
      });
    }

    const markSold = {
      status: req.body.status || property.status,
    };
    return res.status(200).json({
      status: 200,
      message: 'Property marked as sold sucessfully',
      data: markSold,
    });
  }
}

export default new propertyController;