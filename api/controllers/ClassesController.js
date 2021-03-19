class ClassesController {
    static async getAllClasses(req, res) {
      try {
        const people = await req.db.Classes.findAll();
        return res.send(JSON.stringify(people));
      } catch (error) {
        return res.status(500).json({ msg: error.message });
      }
    }
  
    static async getClass(req, res) {
      try {
        const { id } = req.params
        const people = await req.db.Classes.findOne({ where: { id: Number(id) }, raw: true })
        return res.send(JSON.stringify(people))
      } catch(error) { 
        return res.status(500).json({ msg: error.message });
      }
    }
  
    static async createClass(req, res) {
      try {
        const newClass = req.body
        const classCreated = await req.db.Classes.create(newClass)
        return res
          .status(201)
          .send(JSON.stringify(classCreated))
      } catch(error) { 
        return res.status(500).json({ msg: error.message });
      }
    }
  
    static async updateClass(req, res) {
      try {
        const { id } = req.params
        const newData = req.body
        await req.db.Classes.update(newData, { where: { id }})
        return res
          .status(204)
          .end()
      } catch(error) { 
        return res.status(500).json({ msg: error.message });
      }
    }
  
    static async removeClass(req, res) {
      try {
        const { id } = req.params
        await req.db.Classes.destroy({ where: { id }})
        return res
          .status(204)
          .end()
      } catch(error) { 
        return res.status(500).json({ msg: error.message });
      }
    }
  }
  
  module.exports = ClassesController;
  