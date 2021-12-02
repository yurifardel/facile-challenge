const { Router } = require("express");
 
const connection = require('../db/connection')
const cryptr = require('../middleware/cryptr')

const route = Router();


route.post("/encripts", async (req, res) => {
  try {
    const { name } = req.body;

    if (!name) {
      return res.json({
        code: "E_VALIDATION_FAILURE",
        message: 'O campo "name" é obrigatióro',
      });
    }

    const encripted_name = cryptr.encrypt(name)

    const [id] = await connection("facile").insert({
      encripted_name

    }).returning('id')

    return res.json({ id, encripted_name});

  } catch (error) {
    console.log(error)
    // throw Error("unauthorized")
  }
});

route.get('/encripts/:_id', async (req, res) => {
  const { _id } = req.params;
  try {
    const [query] = await connection('facile').where({'id': _id})

    const decrypt = cryptr.decrypt(query.encripted_name)
  
    return res.json({id: query.id, encripted_name: decrypt})
  } catch (error) {
    console.log(error)
    // throw Error("unauthorized")

  }
 
})


module.exports = route;