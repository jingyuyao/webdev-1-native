import {widgetUrl, lessonUrl} from './ServiceConfig';

class WidgetService {
  create(lessonId, widget) {
    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(widget)
    };
    return fetch(`${lessonUrl}/${lessonId}/widget`, options)
      .then(response => response.json());
  }

  findAll() {
    return fetch(widgetUrl).then(response => response.json());
  }

  findById(id) {
    return fetch(`${widgetUrl}/${id}`).then(response => response.json());
  }

  findAllByLessonId(id) {
    return fetch(`${lessonUrl}/${id}/widgets`).then(response => response.json());
  }

  update(id, widget) {
    const options = {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(widget)
    };
    return fetch(`${widgetUrl}/${id}`, options).then(response => response.json());
  }

  remove(id) {
    const options = {
      method: 'DELETE'
    };
    return fetch(`${widgetUrl}/${id}`, options);
  }
}

export default new WidgetService();
