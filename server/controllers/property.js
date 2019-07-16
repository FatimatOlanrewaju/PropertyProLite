import Property from '../models/property';

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
        data: newProperty
      });
    }
}

export default new propertyController;