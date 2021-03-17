class PeopleController {
  static async getAllPeople(req, res) {
    try {
      const people = await req.db.People.findAll();
      return res.send(JSON.stringify(people));
    } catch (error) {
      return res.status(500).json({ msg: error.message });
    }
  }

  static async getPeople(req, res) {
    try {
      const { id } = req.params
      const people = await req.db.People.findOne({ where: { id: Number(id) }, raw: true })
      return res.send(JSON.stringify(people))
    } catch(error) { 
      return res.status(500).json({ msg: error.message });
    }
  }

  static async createPeople(req, res) {
    try {
      const newPerson = req.body
      const personCreated = await req.db.People.create(newPerson)
      return res
        .status(201)
        .send(JSON.stringify(personCreated))
    } catch(error) { 
      return res.status(500).json({ msg: error.message });
    }
  }

  static async updatePeople(req, res) {
    try {
      const { id } = req.params
      const newData = req.body
      await req.db.People.update(newData, { where: { id }})
      return res
        .status(204)
        .end()
    } catch(error) { 
      return res.status(500).json({ msg: error.message });
    }
  }

  static async removePeople(req, res) {
    try {
      const { id } = req.params
      await req.db.People.destroy({ where: { id }})
      return res
        .status(204)
        .end()
    } catch(error) { 
      return res.status(500).json({ msg: error.message });
    }
  }
}

module.exports = PeopleController;
