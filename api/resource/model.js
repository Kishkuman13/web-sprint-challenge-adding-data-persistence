// build your `Resource` model here
const db = require('../../data/dbConfig');

async function findAll() {
  return await db('resources').select('*');
}

async function addResource(resourceData) {
  const [ resource_id ] = await db('resources').insert(resourceData);

  const resourceObj = {
    resource_id: resource_id,
    resource_name: resourceData.resource_name,
    resource_description: resourceData.resource_description
  };
  return resourceObj;
}

module.exports = { findAll, addResource };
