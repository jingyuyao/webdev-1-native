import {lessonUrl, moduleUrl} from './ServiceConfig';

class LessonService {
  create(moduleId, lesson) {
    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(lesson)
    };
    return fetch(`${moduleUrl}/${moduleId}/lesson`, options)
      .then(response => response.json());
  }

  findAll() {
    return fetch(lessonUrl).then(response => response.json());
  }

  findById(id) {
    return fetch(`${lessonUrl}/${id}`).then(response => response.json());
  }

  findAllByModuleId(id) {
    return fetch(`${moduleUrl}/${id}/lessons`).then(response => response.json());
  }

  update(id, lesson) {
    const options = {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(lesson)
    };
    return fetch(`${lessonUrl}/${id}`, options).then(response => response.json());
  }

  remove(id) {
    const options = {
      method: 'DELETE'
    };
    return fetch(`${lessonUrl}/${id}`, options);
  }
}

export default new LessonService();
