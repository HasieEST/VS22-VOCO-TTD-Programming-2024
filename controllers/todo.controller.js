const ToDoModel = require("../models/todo.model")

const createToDo = (req, res, next) => {
    const createdModel = ToDoModel.create(req.body)
    res.status(201).json(createdModel)
}

module.exports = {createToDo}