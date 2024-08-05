import { User } from '@modules/authentication/domain/user.model';

export interface SendMessageInput {
  message: string;
  user: User;
}
