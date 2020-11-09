import { Request, Response } from 'express';
import ITaskManager from '../abstractions/task-manager';

export default class TaskController {
  taskManager: ITaskManager;

  constructor(taskManager: ITaskManager) {
    this.taskManager = taskManager;
    this.getTasks = this.getTasks.bind(this);
    this.createTask = this.createTask.bind(this);
    this.deleteTask = this.deleteTask.bind(this);
    this.checkTask = this.checkTask.bind(this);
  }

  async getTasks(request: Request, response: Response) {
    return response.json(await this.taskManager.getTasks());
  }

  async createTask(request: Request, response: Response) {
    const {content}: {content: string} = request.body;
    return response.json(await this.taskManager.createTask(content));
  }

  async deleteTask(request: Request, response: Response) {
    const {id} = request.params;
    return response.json(await this.taskManager.deleteTask(id));
  }

  async checkTask(request: Request, response: Response) {
    const {id} = request.params;
    return response.json(await this.taskManager.checkTask(id));
  }
}