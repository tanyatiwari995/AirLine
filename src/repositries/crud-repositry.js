class CrudRepository {
  constructor(model) {
    this.model = model;
  }

  // Create a new record
  async create(data) {
    console.log(data);
    // console.log(response);
    try {
      const response = await this.model.create(data);

      return response;
    } catch (error) {
      console.error(
        "Something went wrong in the Crud Repository : create",
        error
      );
      throw error;
    }
  }

  // Delete a record by data
  async destroy(data) {
    try {
      const response = await this.model.destroy({
        where: { id: data },
      });
      return response;
    } catch (error) {
      console.error(
        "Something went wrong in the Crud Repository : destroy",
        error
      );
      throw error;
    }
  }

  // Get a single record by primary key (ID)
  async get(data) {
    try {
      const response = await this.model.findByPk(data);
      return response;
    } catch (error) {
      console.error("Something went wrong in the Crud Repository : get", error);
      throw error;
    }
  }

  // Get all records
  async getAll() {
    try {
      const response = await this.model.findAll(); // Fixed method name
      return response;
    } catch (error) {
      console.error(
        "Something went wrong in the Crud Repository : getAll",
        error
      );
      throw error;
    }
  }

  // Update a record by ID
  async update(id, data) {
    try {
      const response = await this.model.update(data, {
        where: { id: id },
      });
      return response;
    } catch (error) {
      console.error(
        "Something went wrong in the Crud Repository : update",
        error
      );
      throw error;
    }
  }
}

module.exports = CrudRepository;
