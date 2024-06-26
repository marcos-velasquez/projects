import { LocalStorageRepository } from '../../../../shared/infrastructure';
import { BoardIdSpecification } from '../../application/find/specification';
import { Task } from '../../domain/task.model';
import { TaskData, TaskMapper } from './task.mapper';

export class TaskLocalStorageRepository extends LocalStorageRepository<Task, TaskData> {
  constructor() {
    super('tasks', new TaskMapper());
  }

  private async removeAll(boardId: string): Promise<void> {
    const tasks = await this.getAll(new BoardIdSpecification(boardId));
    for (const task of tasks) {
      await this.remove(task);
    }
  }

  public async set(boardId: string, tasks: Task[]): Promise<void> {
    await this.removeAll(boardId);
    for (const task of tasks) {
      await this.save(task);
    }
  }
}
