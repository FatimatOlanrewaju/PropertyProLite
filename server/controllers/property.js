import Property from '../models/property';
import propertyData from '../data/property.data';
import property from '../models/property';

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
      message: 'Property updated successfully',
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
      message: 'Property marked as sold successfully',
      data: markSold,
    });
  }

  deleteProperty(req, res) {
    const property = propertyData.find(property => property.id === parseFloat(req.params.id));
    if(!property) {
      return res.status(404).json({
        status: 404,
        message: 'Property does not exist',
      });
    }
    return res.status(200).json({
      status: 200,
      message: 'Property advert deleted successfully',
    });
  }

  getAllProperty(req, res) {
    const allProperty = propertyData;
    if(!allProperty) {
      return res.status(404).json({
        status: 404,
        message: 'No properties exist',
      });
    }

    //For properties of specific type
    let response = [];
    console.log(req.query)
    if (typeof req.query.type !== 'undefined') {
      allProperty.filter((property) => {
        if(property.type.toString() === req.query.type) {
          response.push(property);
        }
      });
    }
    
    if(Object.keys(req.query).length === 0) {
      response = allProperty;
    }
    
    return res.status(200).json({
      status: 200,
      message: 'All property advert gotten successfully',
      data: response,
    });
  }
  
    /* const propertyByType = propertyData.find(property => property.type === type);
    if(!propertyByType) {
      return res.status(404).json({
        status: 404,
        message: 'Could not find anything that matches filter',
      });
    }

    if(propertyByType) {
      return res.status(200).json({
        status: 200,
        message: 'Property of specific type fetched successfully',
      });
    } */

  getSpecificProperty(req, res) {
    const property = propertyData.find(property => property.id === parseFloat(req.params.id));
    if(!property) {
      return res.status(404).json({
        status: 404,
        message: 'Property does not exist',
      });
    }
    return res.status(200).json({
      status: 200,
      message: 'Property advert fetched successfully',
      data: property,
    });
  }
}

export default new propertyController;