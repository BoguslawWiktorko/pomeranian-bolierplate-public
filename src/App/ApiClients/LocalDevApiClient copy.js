export class LocalDevApiClient {
  constructor({ baseUrl, headers }) {
    if (!baseUrl) console.error('Nie podano base URL');
    this.#baseUrl = baseUrl;
    if (headers) this.#headres = { ...this.#headres, ...headers };
  }

  #baseUrl = '';
  #headres = { 'Content-Type': 'application/json' };

  async getAllToDo() {
    const requestPath = this.#baseUrl + 'api/todo';
    try {
      const response = await fetch(requestPath);
      if (!response.ok) throw new Error(response.status);

      return response.json();
    } catch (error) {
      return Promise.reject(error);
    }
  }
  getToDo(id) {}
  deleteToDo(id) {}
  markAsDone(od) {}
  addToDo(todo) {}
  updateToDo(id, todo) {}
}
