import {
    createTodoRequest,
    getAllTasksRequest,
    getTaskByIdRequest,
    patchTaskByIdRequest,
    deleteTaskByIdRequest
} from './taskRoute.js';
import express from 'express';
import { todoModel } from 'data/models/todoSchema.js';

export default app => {
    const router = express.Router();
    createTodoRequest({ router, todoModel });
    getAllTasksRequest({ router, todoModel });
    getTaskByIdRequest({ router, todoModel });
    patchTaskByIdRequest({ router, todoModel });
    deleteTaskByIdRequest({ router, todoModel });
    app.use('/tasks', router);
};
