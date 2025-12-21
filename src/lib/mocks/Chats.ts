import { ChatMessage, ConversationMessages } from '@/types';

const avatarUrls = [
  "https://i.pravatar.cc/150?img=1",
  "https://i.pravatar.cc/150?img=2",
  "https://i.pravatar.cc/150?img=3",
  "https://i.pravatar.cc/150?img=4",
  "https://i.pravatar.cc/150?img=5",
  "https://i.pravatar.cc/150?img=6",
  "https://i.pravatar.cc/150?img=7",
  "https://i.pravatar.cc/150?img=8",
  "https://i.pravatar.cc/150?img=9",
  "https://i.pravatar.cc/150?img=10",
];

const sampleImageUrls = [
  "https://picsum.photos/200/300?random=1",
  "https://picsum.photos/200/300?random=2",
  "https://picsum.photos/200/300?random=3",
  "https://picsum.photos/200/300?random=4",
  "https://picsum.photos/200/300?random=5",
  "https://picsum.photos/200/300?random=6",
];

const names = [
  "John Doe", "Sarah Johnson", "Michael Smith", "Emily Davis",
  "Robert Brown", "Jessica Lee", "David Wilson", "Laura Clark",
  "Daniel Martinez", "Sophia Lewis"
];

const randomFromArray = <T>(arr: T[]): T => arr[Math.floor(Math.random() * arr.length)];

const generateMessage = (conversationId: string, fromMe: boolean, idx: number): ChatMessage => {
  const isImage = idx % 5 === 0; // 1 image sur 5
  return {
    fromMe,
    conversationId,
    senderId: fromMe ? "user-1" : `user-${Math.floor(Math.random() * 1000)}`,
    type: isImage ? "image" : "text",
    content: isImage ? "Image message" : `Message texte n°${idx + 1}`,
    images: isImage ? randomFromArray(sampleImageUrls) : undefined,
    createdAt: Date.now() - Math.floor(Math.random() * 1000 * 60 * 60 * 24), // last 24h
    isRead: Math.random() > 0.3
  }
}

export const MOCK_CONVERSATIONS: ConversationMessages = Array.from({ length: 30 }).map((_, convIdx) => {
  const userId = convIdx + 2;
  const conversationId = `conv-${userId}`;
  const userAvatar = randomFromArray(avatarUrls);
  const userName = randomFromArray(names);

  const messages: ChatMessage[] = Array.from({ length: 30 }).map((_, msgIdx) => {
    const fromMe = Math.random() > 0.5;
    return generateMessage(conversationId, fromMe, msgIdx);
  });

  messages.sort((a, b) => a.createdAt - b.createdAt);

  return {
    user: {
      id: `user-${userId}`,
      profil: userAvatar,
      name: userName,
      isOnline: Math.random() > 0.5,
      lastSeen: "10:23 AM"
    },
    messages
  }
});
