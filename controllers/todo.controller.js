const ToDoModel = require("../models/todo.model")

const createToDo = async (req, res, next) => {
    console.log(req.body)
    const createdModel = await ToDoModel.create(req.body)
    res.status(201).json(createdModel)
}

module.exports = {createToDo}