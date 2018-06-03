import {courseUrl} from './ServiceConfig';

class CourseService {
  create(course) {
    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(course)
    };
    return fetch(courseUrl, options).then(response => response.json());
  }

  findAll() {
    return fetch(courseUrl).then(response => response.json());
  }

  findById(id) {
    return fetch(`${courseUrl}/${id}`).then(response => response.json());
  }

  update(id, course) {
    const options = {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(course)
    };
    return fetch(`${courseUrl}/${id}`, options).then(response => response.json());
  }

  remove(id) {
    const options = {
      method: 'DELETE'
    };
    return fetch(`${courseUrl}/${id}`, options);
  }
}

export default new CourseService();
