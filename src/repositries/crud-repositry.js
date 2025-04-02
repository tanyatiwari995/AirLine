class CrudRepository {
  constructor(model = null, useObject = false) {
    this.model = model;
    this.useObject = useObject;
    this.data = []; // In-memory storage when no model is used
  }

  async create(data) {
    if (this.useObject || !this.model) {
      data.id = this.data.length + 1;
      this.data.push(data);
      return data;
    }
    return this.model.create(data);
  }

  async get(id) {
    if (this.useObject || !this.model) {
      return this.data.find(item => item.id === id) || null;
    }
    return this.model.findByPk(id);
  }
  

  async getAll() {
    if (this.useObject || !this.model) {
      return this.data;
    }
    return this.model.findAll();
  }

  async update(id, newData) {
    if (this.useObject || !this.model) {
      let item = this.data.find(item => item.id === id);
      if (item) Object.assign(item, newData);
      return item;
    }
    return this.model.update(newData, { where: { id } });
  }

  async destroy(id) {
    if (this.useObject || !this.model) {
      this.data = this.data.filter(item => item.id !== id);
      return { message: "Deleted successfully" };
    }
    return this.model.destroy({ where: { id } });
  }
}

module.exports = CrudRepository;

// class CrudRepository {
//   constructor(model) {
//     this.model = model;
//     console.log("Model in CrudRepository:", model); // Debugging
//   }

//   async create(data) {
//     console.log("Data received in create:", data);
//     if (!this.model) {
//       console.error("Model is undefined in CrudRepository!");
//       return;
//     }

//     try {
//       const response = await this.model.create(data);
//       return response;
//     } catch (error) {
//       console.error("Something went wrong in the Crud Repository : create", error);
//       throw error;
//     }
//   }
//     // Delete a record by data
//     async destroy(data) {
//       try {
//         const response = await this.model.destroy({
//           where: { id: data },
//         });
//         return response;
//       } catch (error) {
//         console.error(
//           "Something went wrong in the Crud Repository : destroy",
//           error
//         );
//         throw error;
//       }
//     }
  
//     // Get a single record by primary key (ID)
//     async get(data) {
//       try {
//         const response = await this.model.findByPk(data);
//         return response;
//       } catch (error) {
//         console.error("Something went wrong in the Crud Repository : get", error);
//         throw error;
//       }
//     }
  
//     // Get all records
//     async getAll() {
//       try {
//         const response = await this.model.findAll(); // Fixed method name
//         return response;
//       } catch (error) {
//         console.error(
//           "Something went wrong in the Crud Repository : getAll",
//           error
//         );
//         throw error;
//       }
//     }
//       // Update a record by ID
//   async update(id, data) {
//     try {
//       const response = await this.model.update(data, {
//         where: { id: id },
//       });
//       return response;
//     } catch (error) {
//       console.error(
//         "Something went wrong in the Crud Repository : update",
//         error
//       );
//       throw error;
//     }
//   }
  
// }

// module.exports = CrudRepository; 
 



