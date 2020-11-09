import { Request, Response } from 'express';
import ITask from '../models/task';

export default class TaskController {
  taskManager: any;

  constructor(taskManager: any) {
    this.taskManager = taskManager;
  }

  async createTask(request: Request, response: Response) {

  }

  async deleteTask(request: Request, response: Response) {

  }

  async checkTask(request: Request, response: Response) {

  }
}