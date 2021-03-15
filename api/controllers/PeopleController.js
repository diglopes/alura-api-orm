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
}

module.exports = PeopleController;
