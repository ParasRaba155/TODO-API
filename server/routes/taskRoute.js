import express from 'express';
// import { todoModel } from '../data/models/todoSchema.js';
// import log from '../utils/logger.js';
import {
    createItem,
    getAllItems,
    getItemById,
    patchItemById,
    deleteItemByID
} from 'data/utils.js';
import { apiSucess, apiFailure } from 'utils/apiUtils.js';
const route = express.Router();

export const createTodoRequest = ({ router, todoModel }) =>
    router.post('/', async (req, res) => {
        try {
            const todoItem = await createItem(todoModel, req.body);
            return apiSucess(res, todoItem);
        } catch (err) {
            return apiFailure(res, err.message);
        }
    });

export const getAllTasksRequest = ({ router, todoModel }) =>
    router.get('/', async (req, res) => {
        try {
            const taskList = await getAllItems(todoModel);
            return apiSucess(res, taskList);
        } catch (err) {
            return apiFailure(res, err.message);
        }
    });

export const getTaskByIdRequest = ({ router, todoModel }) =>
    router.get('/:id', async (req, res) => {
        try {
            const task = await getItemById(todoModel, { _id: req.params.id });
            return apiSucess(res, task);
        } catch (err) {
            return apiFailure(res, err.message);
        }
    });

export const patchTaskByIdRequest = ({ router, todoModel }) =>
    router.patch('/:id', async (req, res) => {
        try {
            const updatedTask = await patchItemById({
                model: todoModel,
                _id: req.params.id,
                body: req.body
            });
            return apiSucess(res, updatedTask);
        } catch (err) {
            return apiFailure(res, err.message);
        }
    });

export const deleteTaskByIdRequest = ({ router, todoModel }) =>
    router.delete('/:id', async (req, res) => {
        try {
            const deletedTask = await deleteItemByID({
                model: todoModel,
                _id: req.params.id
            });
            return apiSucess(res, deletedTask);
        } catch (err) {
            return apiFailure(res, err.message);
        }
    });

export default route;
