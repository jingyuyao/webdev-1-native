import {questionUrl, widgetUrl} from './ServiceConfig';

class QuestionService {
  create(examId, question) {
    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(question)
    };
    return fetch(`${widgetUrl}/${examId}/question`, options)
      .then(response => response.json());
  }

  findAll() {
    return fetch(questionUrl).then(response => response.json());
  }

  findById(id) {
    return fetch(`${questionUrl}/${id}`).then(response => response.json());
  }

  findAllByExamId(id) {
    return fetch(`${widgetUrl}/${id}/questions`).then(response => response.json());
  }

  update(id, question) {
    const options = {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(question)
    };
    return fetch(`${questionUrl}/${id}`, options).then(response => response.json());
  }

  remove(id) {
    const options = {
      method: 'DELETE'
    };
    return fetch(`${questionUrl}/${id}`, options);
  }
}

export default new QuestionService();
