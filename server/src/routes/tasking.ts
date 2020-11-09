import { Router } from 'express';
import TaskController from '../controllers/task-controller';
import TaskManagerLocal from '../models/task-manager-local';

const router = Router();
const taskController: TaskController = new TaskController(new TaskManagerLocal());

router.get('/', taskController.getTasks);
router.post('/new', taskController.createTask);
router.delete('/:id', taskController.deleteTask);
router.put('/check/:id', taskController.checkTask);

export {router as tasking};