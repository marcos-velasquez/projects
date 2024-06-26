import { UseCase } from '../../../../shared/application';
import { TasksSetEvent } from '../../domain/task.event';
import { TaskRepository } from '../../domain/task.repository';
import { SetInput } from './set-tasks.input';

export class SetTasksUseCase extends UseCase<SetInput, void> {
  constructor(private readonly taskRepository: TaskRepository) {
    super();
  }

  public async execute(input: SetInput): Promise<void> {
    await this.taskRepository.set(input.boardId, input.tasks);
    this.bus.publish(TasksSetEvent.name, new TasksSetEvent(input.boardId, input.tasks));
  }
}
