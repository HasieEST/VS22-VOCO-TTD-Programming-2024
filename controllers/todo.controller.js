const ToDoModel = require("../models/todo.model")

const createToDo = async (req, res, next) => {
    try {
        const createdModel = await ToDoModel.create(req.body)
        res.status(201).json(createdModel)
    } catch (error) {
        next(error)
    }
}

const getTodos = async (req, res, next) => {
    try {
        const allTodos = await ToDoModel.find({})
        res.status(200).json(allTodos)
    } catch (error) {
        next(error)
    }
}


module.exports = { createToDo, getTodos }