import { Todo } from "../models/todo.js";

export const createTodo = async (req, res) => {
  try {
    const { title } = req.body;

    const todo = await Todo.create({ title, userID: req.user._id });
    if (!todo) {
      throw new Error("Todo Creation Failed");
    }
    res.status(201).json({ message: "Todo Created Successfully", todo });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

export const getTodos = async (req, res) => {
  try {
    const todos = await Todo.find({ userID: req.user._id }).sort({
      createdAt: -1,
    });
    if (!todos) {
      throw new Error("No Todos Found");
    }
    res.status(200).json({ message: "Todo Fetched successfully", todos });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

export const updateTodo = async (req, res) => {
  try {
    const { id } = req.params;
    const { title } = req.body;

    const existingTodo = await Todo.findById(id);
    if (!existingTodo) {
      throw new Error("Todo Not Found");
    }
    existingTodo.title = title;
    await existingTodo.save();
    res
      .status(200)
      .json({ message: "Todo Updated Successfully", todo: existingTodo });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

export const deleteTodo = async (req, res) => {
  try {
    const { id } = req.params;
    const existingTodo = await Todo.findById(id);
    if (!existingTodo) {
      throw new Error("Todo Not Found");
    }
    await existingTodo.deleteOne();
    res.status(200).json({ message: "Todo Deleted Successfully" });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
