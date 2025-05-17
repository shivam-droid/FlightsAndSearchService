
class CrudService {
    constructor(repository) {
        this.repository = repository;
    }

    async create(data) {
        return await this.repository.create(data);
    }

    async getAll() {
        return await this.repository.getAll();
    }

    async get(id) {
        return await this.repository.get(id);
    }

    async update(id, data) {
        return await this.repository.update(id, data);
    }

    async destroy(id) {
        return await this.repository.destroy(id);
    }
}

module.exports = CrudService;