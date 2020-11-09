import ITask from '../abstractions/task';
import {v4} from 'uuid';

export default class Task implements ITask {
  id: string;
  content: string;
  done: boolean;

  constructor(content: string, done: boolean = false) {
    this.content = content;
    this.done = done;
    this.id = v4();
  }
}