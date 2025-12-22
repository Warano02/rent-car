export type TImageMessage = { caption: string; url: string };

export type ChatMessage = {
  fromMe: boolean; //Je ne ferais pas de groupe donc ceci est suffisant
  conversationId: string;
  senderId: string;
  type: "text" | "image";
  images?: TImageMessage[]; // au cas où le message est une image
  content: string;
  alt?: string; // image description
  createdAt: number; // timestamp
  isRead: boolean;
};

type chatWith = {
  id: string;
  profil: ImageSourcePropType;
  name: string;
  isOnline: boolean;
  lastSeen?: string;
};

export type SingleConversation = {
  user: chatWith;
  messages: ChatMessage[];
};

export type ConversationMessages = SingleConversation[];
