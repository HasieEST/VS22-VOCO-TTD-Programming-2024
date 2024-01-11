const ToDoController = require('../../controllers/todo.controller')
const ToDoModel = require('../../models/todo.model')
const httpMocks = require('node-mocks-http')
const newTodo = require('../mock_data/new_todo.json')

ToDoModel.create = jest.fn()

let req, res, next
beforeEach(() => {
    req = httpMocks.createRequest()
    res = httpMocks.createResponse()
    next = null
})

describe('ToDoController.createToDo', () => {
    beforeEach(() => {
        req.body = newTodo
    })

    it('should have a createToDo function', () => {
        expect(typeof ToDoController.createToDo).toBe('function')
    })
    it('should call ToDoModel.create', () => {
        ToDoController.createToDo(req, res, next)
        expect(ToDoModel.create).toBeCalledWith(newTodo)
    })
    it('should return 201 response code', () => {
        ToDoController.createToDo(req, res, next)
        expect(res.statusCode).toBe(201)
        expect(res._isEndCalled()).toBeTruthy()
    })
    it('should return json body in response', () => {
        ToDoModel.create.mockReturnValue(newTodo)
        ToDoController.createToDo(req, res, next)
        expect(res._getJSONData()).toStrictEqual(newTodo)
    })
})