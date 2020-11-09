import ITask from './task';

export default interface ITaskManager {
  getTasks: () => Promise<Array<ITask>>;
  createTask: (content: string) => Promise<ITask>;
  deleteTask: (taskId: string) => Promise<ITask>;
  checkTask: (taskId: string) => Promise<ITask>;
}