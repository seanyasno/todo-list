import ITask from './task';

export default interface ITaskManager {
  createTask: (task: ITask) => Promise<boolean>;
  deleteTask: (task: ITask) => Promise<boolean>;
  checkTask: (task: ITask) => Promise<boolean>;
}