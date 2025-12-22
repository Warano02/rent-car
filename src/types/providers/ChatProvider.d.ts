import { SingleConversation } from "../mocks/chats";

export interface IChatProvider {
  chats: ConversationMessages;
  privateChat?: SingleConversation;
  selectChat: (id: string) => void;
}
