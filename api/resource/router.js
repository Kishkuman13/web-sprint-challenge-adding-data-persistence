// build your `/api/resources` router here
const resourcesRouter = require('express').Router();
const Resources = require('./model');

resourcesRouter.get('/', async (req, res, next) => {
  try {
    const resources = await Resources.findAll();
    res.status(200).json(resources);
  } catch (err) {
    next(err);
  }
});

resourcesRouter.post('/', async (req, res, next) => {
  const resource = req.body;

  if (!resource.resource_name) {
    res.status(400).json({ message: 'resource must have a name' });
    next();
  } else {
    try {
      const newResource = await Resources.addResource(resource);
      res.status(200).json(newResource);
    } catch (err) {
      next(err);
    }
  }
});

module.exports = resourcesRouter;
