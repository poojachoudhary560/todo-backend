import express from 'express';
import db from '../db/db';
import TodoController from '../todosControllers/todos';

const router = express.Router();

router.get('/api/v1/todos', TodoController.getAllTodos);

router.post('/api/v1/todos', TodoController.createTodo);

router.get('/api/v1/todos/:id', TodoController.getTodo);

router.delete('/api/v1/todos/:id', TodoController.deleteTodo);

router.put('/api/v1/todos/:id', TodoController.updateTodo);

export default router;
