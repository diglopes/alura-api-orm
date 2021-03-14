class PeopleController {
  static async getAllPeople(req, res) {
    try {
      const people = await req.db.People.findAll();
      return res.send(JSON.stringify(people));
    } catch (error) {
      return res.status(500).json({ msg: error.message });
    }
  }
}

module.exports = PeopleController;
