import { ConversationMessages } from "@/types";

export const MOCK_CONVERSATIONS: ConversationMessages = [
  {
    user: {
      id: "user-2",
      profil: "https://i.pravatar.cc/150?img=12",
      name: "Sarah Johnson",
      isOnline: true,
      lastSeen: "09:42",
    },
    messages: [
      {
        fromMe: false,
        conversationId: "conv-2",
        senderId: "user-2",
        type: "text",
        content: "Hey 👋",
        createdAt: 1710000000000,
        isRead: true,
      },
      {
        fromMe: false,
        conversationId: "conv-2",
        senderId: "user-2",
        type: "text",
        content:
          "Je voulais te demander si tu avais avancé sur la feature du chat. On doit montrer quelque chose au client demain.",
        createdAt: 1710000300000,
        isRead: true,
      },
      {
        fromMe: true,
        conversationId: "conv-2",
        senderId: "user-1",
        type: "text",
        content:
          "Oui 👍 j’ai presque fini. Il reste juste l’envoi des images multiples et la gestion des captions.",
        createdAt: 1710000600000,
        isRead: true,
      },
      {
        fromMe: false,
        conversationId: "conv-2",
        senderId: "user-2",
        type: "image",
        content: "",
        images: [
          {
            url: "https://picsum.photos/400/600?random=11",
            caption: "Voici l’inspiration du design 📱",
          },
          {
            url: "https://picsum.photos/400/600?random=12",
            caption: "J’aime bien ce layout pour les images",
          },
        ],
        createdAt: 1710000900000,
        isRead: false,
      },
      {
        fromMe: true,
        conversationId: "conv-2",
        senderId: "user-1",
        type: "image",
        content: "",
        images: [
          {
            url: "https://picsum.photos/400/600?random=13",
            caption:
              "Voilà un premier test côté UI. Dis-moi ce que tu en penses.",
          },
        ],
        createdAt: 1710001200000,
        isRead: false,
      },
      {
        fromMe: false,
        conversationId: "conv-2",
        senderId: "user-1",
        type: "text",
        content:
          "Oui 👍 j’ai presque fini. Il reste juste l’envoi des images multiples et la gestion des captions.",
        createdAt: 1710000600000,
        isRead: true,
      },
      {
        fromMe: true,
        conversationId: "conv-2",
        senderId: "user-1",
        type: "image",
        content: "",
        images: [
          {
            url: "https://picsum.photos/400/600?random=13",
            caption:
              "Voilà un premier test côté UI. Dis-moi ce que tu en penses.",
          },
          {
            url: "https://picsum.photos/400/600?random=16",
            caption:
              "Voilà un premier test côté UI. Dis-moi ce que tu en penses.",
          },
          {
            url: "https://picsum.photos/400/600?random=18",
            caption:
              "Voilà un premier test côté UI. Dis-moi ce que tu en penses.",
          },
        ],
        createdAt: 1710001200000,
        isRead: false,
      },
      {
        fromMe: false,
        conversationId: "conv-2",
        senderId: "user-1",
        type: "text",
        content:
          "Oui 👍 j’ai presque fini. Il reste juste l’envoi des images multiples et la gestion des captions.",
        createdAt: 1710000600000,
        isRead: true,
      },
      {
        fromMe: true,
        conversationId: "conv-2",
        senderId: "user-1",
        type: "image",
        content: "",
        images: [
          {
            url: "https://picsum.photos/400/600?random=13",
            caption:
              "Voilà un premier test côté UI. Dis-moi ce que tu en penses.",
          },
          {
            url: "https://picsum.photos/400/600?random=16",
            caption:
              "Voilà un premier test côté UI. Dis-moi ce que tu en penses.",
          },
          {
            url: "https://picsum.photos/400/600?random=18",
            caption:
              "Voilà un premier test côté UI. Dis-moi ce que tu en penses.",
          },
          {
            url: "https://picsum.photos/400/600?random=18",
            caption:
              "Voilà un premier test côté UI. Dis-moi ce que tu en penses.",
          },
          {
            url: "https://picsum.photos/400/600?random=18",
            caption:
              "Voilà un premier test côté UI. Dis-moi ce que tu en penses.",
          },
          {
            url: "https://picsum.photos/400/600?random=18",
            caption:
              "Voilà un premier test côté UI. Dis-moi ce que tu en penses.",
          },
        ],
        createdAt: 1710001200000,
        isRead: false,
      },
    ],
  },

  {
    user: {
      id: "user-3",
      profil: "https://i.pravatar.cc/150?img=22",
      name: "Michael Smith",
      isOnline: false,
      lastSeen: "Hier",
    },
    messages: [
      {
        fromMe: false,
        conversationId: "conv-3",
        senderId: "user-3",
        type: "text",
        content:
          "Salut Andrew, désolé pour le retard. J’étais en déplacement toute la journée.",
        createdAt: 1710010000000,
        isRead: true,
      },
      {
        fromMe: true,
        conversationId: "conv-3",
        senderId: "user-1",
        type: "text",
        content:
          "Pas de souci 🙂 tu as pu regarder le repo ? J’ai push les dernières modifs.",
        createdAt: 1710010300000,
        isRead: true,
      },
      {
        fromMe: false,
        conversationId: "conv-3",
        senderId: "user-3",
        type: "image",
        content: "",
        images: [
          {
            url: "https://picsum.photos/400/600?random=21",
            caption: "",
          },
          {
            url: "https://picsum.photos/400/600?random=22",
            caption: "",
          },
          {
            url: "https://picsum.photos/400/600?random=23",
            caption: "Quelques captures pendant le test",
          },
        ],
        createdAt: 1710010600000,
        isRead: false,
      },
      {
        fromMe: false,
        conversationId: "conv-3",
        senderId: "user-3",
        type: "text",
        content:
          "Globalement c’est très propre. J’aime bien la logique des conversations et la séparation text / image. On est clairement proche d’un WhatsApp-like.",
        createdAt: 1710010900000,
        isRead: false,
      },
    ],
  },

  {
    user: {
      id: "user-4",
      profil: "https://i.pravatar.cc/150?img=35",
      name: "Emily Davis",
      isOnline: true,
    },
    messages: [
      {
        fromMe: true,
        conversationId: "conv-4",
        senderId: "user-1",
        type: "text",
        content: "Tu es dispo pour un call rapide ?",
        createdAt: 1710020000000,
        isRead: true,
      },
      {
        fromMe: false,
        conversationId: "conv-4",
        senderId: "user-4",
        type: "text",
        content: "Oui dans 5 minutes. Je termine juste un truc et j’arrive.",
        createdAt: 1710020300000,
        isRead: true,
      },
      {
        fromMe: false,
        conversationId: "conv-4",
        senderId: "user-4",
        type: "image",
        content: "",
        images: [
          {
            url: "https://picsum.photos/400/600?random=31",
            caption:
              "Au passage, voilà les assets dont je te parlais pour l’écran chat.",
          },
        ],
        createdAt: 1710020600000,
        isRead: true,
      },
    ],
  },
];
