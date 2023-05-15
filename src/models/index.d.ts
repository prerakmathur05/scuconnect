import { ModelInit, MutableModel, __modelMeta__, ManagedIdentifier } from "@aws-amplify/datastore";
// @ts-ignore
import { LazyLoading, LazyLoadingDisabled, AsyncCollection, AsyncItem } from "@aws-amplify/datastore";





type EagerAlumni = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Alumni, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly graduationDate?: string | null;
  readonly major?: string | null;
  readonly degree?: string | null;
  readonly isEmployed?: string | null;
  readonly company?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyAlumni = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Alumni, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly graduationDate?: string | null;
  readonly major?: string | null;
  readonly degree?: string | null;
  readonly isEmployed?: string | null;
  readonly company?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Alumni = LazyLoading extends LazyLoadingDisabled ? EagerAlumni : LazyAlumni

export declare const Alumni: (new (init: ModelInit<Alumni>) => Alumni) & {
  copyOf(source: Alumni, mutator: (draft: MutableModel<Alumni>) => MutableModel<Alumni> | void): Alumni;
}

type EagerMentor = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Mentor, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly graduationDate?: string | null;
  readonly major?: string | null;
  readonly degree?: string | null;
  readonly isEmployed?: string | null;
  readonly company?: string | null;
  readonly Mentees?: (Mentee | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyMentor = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Mentor, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly graduationDate?: string | null;
  readonly major?: string | null;
  readonly degree?: string | null;
  readonly isEmployed?: string | null;
  readonly company?: string | null;
  readonly Mentees: AsyncCollection<Mentee>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Mentor = LazyLoading extends LazyLoadingDisabled ? EagerMentor : LazyMentor

export declare const Mentor: (new (init: ModelInit<Mentor>) => Mentor) & {
  copyOf(source: Mentor, mutator: (draft: MutableModel<Mentor>) => MutableModel<Mentor> | void): Mentor;
}

type EagerMentee = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Mentee, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly graduationDate?: string | null;
  readonly major?: string | null;
  readonly degree?: string | null;
  readonly mentorID: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyMentee = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Mentee, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly graduationDate?: string | null;
  readonly major?: string | null;
  readonly degree?: string | null;
  readonly mentorID: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Mentee = LazyLoading extends LazyLoadingDisabled ? EagerMentee : LazyMentee

export declare const Mentee: (new (init: ModelInit<Mentee>) => Mentee) & {
  copyOf(source: Mentee, mutator: (draft: MutableModel<Mentee>) => MutableModel<Mentee> | void): Mentee;
}

type EagerUser = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<User, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly firstName?: string | null;
  readonly lastName?: string | null;
  readonly phoneNumber?: string | null;
  readonly status?: string | null;
  readonly type?: string | null;
  readonly imageUri?: string | null;
  readonly Messages?: (Message | null)[] | null;
  readonly ChatRooms?: (ChatRoomUser | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyUser = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<User, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly firstName?: string | null;
  readonly lastName?: string | null;
  readonly phoneNumber?: string | null;
  readonly status?: string | null;
  readonly type?: string | null;
  readonly imageUri?: string | null;
  readonly Messages: AsyncCollection<Message>;
  readonly ChatRooms: AsyncCollection<ChatRoomUser>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type User = LazyLoading extends LazyLoadingDisabled ? EagerUser : LazyUser

export declare const User: (new (init: ModelInit<User>) => User) & {
  copyOf(source: User, mutator: (draft: MutableModel<User>) => MutableModel<User> | void): User;
}

type EagerChatRoom = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<ChatRoom, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly newMessages?: number | null;
  readonly ChatRoomUsers?: (ChatRoomUser | null)[] | null;
  readonly Messages?: (Message | null)[] | null;
  readonly LastMessage?: Message | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly chatRoomLastMessageId?: string | null;
}

type LazyChatRoom = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<ChatRoom, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly newMessages?: number | null;
  readonly ChatRoomUsers: AsyncCollection<ChatRoomUser>;
  readonly Messages: AsyncCollection<Message>;
  readonly LastMessage: AsyncItem<Message | undefined>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly chatRoomLastMessageId?: string | null;
}

export declare type ChatRoom = LazyLoading extends LazyLoadingDisabled ? EagerChatRoom : LazyChatRoom

export declare const ChatRoom: (new (init: ModelInit<ChatRoom>) => ChatRoom) & {
  copyOf(source: ChatRoom, mutator: (draft: MutableModel<ChatRoom>) => MutableModel<ChatRoom> | void): ChatRoom;
}

type EagerMessage = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Message, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly content?: string | null;
  readonly imageUri?: string | null;
  readonly docUri?: string | null;
  readonly userID: string;
  readonly chatroomID: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyMessage = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Message, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly content?: string | null;
  readonly imageUri?: string | null;
  readonly docUri?: string | null;
  readonly userID: string;
  readonly chatroomID: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Message = LazyLoading extends LazyLoadingDisabled ? EagerMessage : LazyMessage

export declare const Message: (new (init: ModelInit<Message>) => Message) & {
  copyOf(source: Message, mutator: (draft: MutableModel<Message>) => MutableModel<Message> | void): Message;
}

type EagerChatRoomUser = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<ChatRoomUser, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly userId?: string | null;
  readonly chatRoomId?: string | null;
  readonly user: User;
  readonly chatRoom: ChatRoom;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyChatRoomUser = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<ChatRoomUser, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly userId?: string | null;
  readonly chatRoomId?: string | null;
  readonly user: AsyncItem<User>;
  readonly chatRoom: AsyncItem<ChatRoom>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type ChatRoomUser = LazyLoading extends LazyLoadingDisabled ? EagerChatRoomUser : LazyChatRoomUser

export declare const ChatRoomUser: (new (init: ModelInit<ChatRoomUser>) => ChatRoomUser) & {
  copyOf(source: ChatRoomUser, mutator: (draft: MutableModel<ChatRoomUser>) => MutableModel<ChatRoomUser> | void): ChatRoomUser;
}