class CrudRepository {
    constructor(model) {
        this.model = model;
    }

    async create(data) {
        try {

            const record = await this.model.create(data);
            return record;
            
        } catch (error) {
            console.error('Something went wrong in crud repository');
            throw new Error('Error creating record');
            
        }
    }

    async get(id) {
        try {

            const record = await this.model.findByPk(id);
            if (!record) {
                throw new Error('Record not found');
            }
            return record;
            
        } catch (error) {
            console.error('Something went wrong in crud repository');
            throw new Error('Error creating record');
            
        }
    }

    async getAll() {
        try {
            const records = await this.model.findAll();
            return records;
            
        } catch (error) {
            console.error('Something went wrong in crud repository');
            throw new Error('Error creating record');
            
        }
    }

    async update(id, data) {
        try {
            
            const record = await this.model.findByPk(id);
            if (!record) {
                throw new Error('Record not found');
            }
            const updatedRecord = await record.update(data);
            return updatedRecord;
            
        } catch (error) {
            console.error('Something went wrong in crud repository');
            throw new Error('Error creating record');
            
        }
    }

    async destroy(id) {
        try {

            await this.model.destroy({
                where: {
                    id: id
                }
            });
            
        } catch (error) {
            console.error('Something went wrong in crud repository');
            throw new Error('Error creating record');
            
        }
    }
}

module.exports = CrudRepository;