const Task = require('../models/taskModel');
const asyncWrapper = require('../middlewares/async');
const {
  createCustomError,
} = require('../errors/custom-error');

const getAllTasks = asyncWrapper(
  async (req, res) => {
    const tasks = await Task.find();
    res.status(200).json({
      status: 'success',
      data: {
        tasks,
        amount: tasks.length,
      },
    });
  }
);

const createTask = asyncWrapper(
  async (req, res) => {
    const task = await Task.create(req.body);
    res.status(201).json({
      status: 'success',
      task,
    });
  }
);

const getTask = asyncWrapper(
  async (req, res, next) => {
    const task = await Task.findById(
      req.params.id
    );
    if (!task) {
      return next(
        createCustomError(
          `No task with id ${id}`,
          404
        )
      );
    }
    res.status(200).json({
      status: 'success',
      data: {
        task,
      },
    });
  }
);
const updateTask = asyncWrapper(
  async (req, res, next) => {
    const task = await Task.findByIdAndUpdate(
      req.params.id,
      req.body,
      {
        new: true,
        runValidators: true,
      }
    );
    if (!task) {
      return next(
        createCustomError(
          `No task with id ${id}`,
          404
        )
      );
    }
    res.status(200).json({
      status: 'success',
      data: {
        task,
      },
    });
  }
);
const deleteTask = asyncWrapper(
  async (req, res, next) => {
    const task = await Task.findByIdAndDelete(
      req.params.id
    );
    if (!task) {
      return next(
        createCustomError(
          `No task with id ${id}`,
          404
        )
      );
    }
    res.status(204).json({
      status: 'success',
      data: null,
    });
  }
);

module.exports = {
  getAllTasks,
  getTask,
  updateTask,
  createTask,
  deleteTask,
};
