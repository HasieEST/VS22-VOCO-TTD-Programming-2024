const ToDoModel = require("../models/todo.model")

const createToDo = async (req, res, next) => {
    try {
        const createdModel = await ToDoModel.create(req.body)
        res.status(201).json(createdModel)
    } catch (error) {
        next(error)
    }

}

module.exports = { createToDo }