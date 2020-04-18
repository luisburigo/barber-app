import {api} from "./api";

class Service {
    constructor(url) {
        this.url = url;
    }

    create(payload) {
        return api.post(this.url, payload);
    }

    delete(id) {
        return api.delete(`${this.url}/${id}`);
    }

    update(id, payload) {
        return api.post(this.url, {...payload, id});
    }

    findAll() {
        return api.get(this.url);
    }

    find(id) {
        return api.get(`${this.url}/${id}`);
    }
}

export {Service}
