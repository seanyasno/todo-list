import ITask from '../abstractions/task';
import ITaskManager from '../abstractions/task-manager';
import Task from './task';

export default class TaskManagerLocal implements ITaskManager {
  tasks: Array<ITask> = [];

  async getTasks(): Promise<Array<ITask>> {
    return Promise.resolve(this.tasks);
  }

  async createTask(content: string): Promise<ITask> {
    const task: Task = new Task(content);
    this.tasks.push(task);
    return Promise.resolve(task);
  }

  async deleteTask(taskId: string): Promise<ITask> {
    const removedTaskIndex: number = this.tasks.findIndex(task => task.id === taskId);
    if (removedTaskIndex === -1)
      return Promise.reject({error: `There is no task with if of ${taskId}`});
    const removedTask: ITask = this.tasks.splice(removedTaskIndex, 1)[0];
    return Promise.resolve(removedTask);
  }

  async checkTask(taskId: string): Promise<ITask> {
    this.tasks.forEach((task, index) => task.id === taskId ? this.tasks[index].done = !this.tasks[index].done : '');
    const task: ITask | undefined = this.tasks.find(task => task.id === taskId);
    if (task)
      return Promise.resolve(task);
    return Promise.reject({error: `There is no task with if of ${taskId}`});
  }
}