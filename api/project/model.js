// build your `Project` model here
const db = require('../../data/dbConfig');

async function findAll() {
  const projects = await db('projects').select('*');
  const projectsObj = projects.map((project) => {
    return {
      project_id: project.id,
      project_name: project.project_name,
      project_description: project.project_description,
      project_completed: !project.project_completed ? true : project.project_completed === 0 ? true : false,
    };
  });

  return projectsObj;
}

async function addProject(project) {
  const [ project_id ] = await db('projects').insert(project);

  const projectsObj = {
		project_id: project_id,
		project_name: project.project_name,
		project_description: project.project_description,
		project_completed: !project.project_completed
			? true
			: project.project_completed === 0
			? true
			: false,
  };
  return projectsObj;
}

module.exports = { findAll, addProject };
