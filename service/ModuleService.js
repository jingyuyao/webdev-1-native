import {moduleUrl, courseUrl} from './ServiceConfig';

class ModuleService {
  create(courseId, module) {
    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(module)
    };
    return fetch(`${courseUrl}/${courseId}/module`, options)
      .then(response => response.json());
  }

  findAll() {
    return fetch(moduleUrl).then(response => response.json());
  }

  findById(id) {
    return fetch(`${moduleUrl}/${id}`).then(response => response.json());
  }

  findAllByCourseId(id) {
    return fetch(`${courseUrl}/${id}/modules`).then(response => response.json());
  }

  update(id, module) {
    const options = {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(module)
    };
    return fetch(`${moduleUrl}/${id}`, options).then(response => response.json());
  }

  remove(id) {
    const options = {
      method: 'DELETE'
    };
    return fetch(`${moduleUrl}/${id}`, options);
  }
}

export default new ModuleService();
