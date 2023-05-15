// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { Alumni, Mentor, Mentee, User, ChatRoom, Message, ChatRoomUser } = initSchema(schema);

export {
  Alumni,
  Mentor,
  Mentee,
  User,
  ChatRoom,
  Message,
  ChatRoomUser
};