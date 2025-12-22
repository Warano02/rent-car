import { SingleConversation, TImageMessage } from "../mocks/chats";

export type TSendMessageProps = {
  type: "image" | "text";
  text?: string;
  images?: TImageMessage[];
};

export interface IChatProvider {
  chats: ConversationMessages;
  privateChat?: SingleConversation;
  selectChat: (id: string) => void;
  sendMessage: ({ type, value }: TSendMessageProps) => void;
  isSending: boolean;
}
