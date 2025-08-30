import { BlogType } from "@/types/blog";
import { images } from "@/utils/images";

export const blogs: BlogType[] = [
  {
    id: "1",
    title: "The Future of AI in Everyday Life",
    date: "2025-08-25",
    thumbnail: images.BLOG1,
    content: [
      {
        type: "paragraph",
        value:
          "Artificial Intelligence is rapidly shaping how we live, work, and interact. From smart assistants to advanced recommendation systems, AI is becoming a part of our everyday decision-making processes.",
      },
      {
        type: "image",
        value: "https://picsum.photos/seed/ai/800/400",
      },
      {
        type: "paragraph",
        value:
          "In the coming years, we can expect AI to play a bigger role in healthcare, finance, education, and even creative industries. But with great power comes great responsibility—ethics and governance will be key.",
      },
      {
        type: "list",
        value: [
          "AI in Healthcare: Personalized treatments and faster diagnostics.",
          "AI in Finance: Fraud detection and automated investment advice.",
          "AI in Education: Customized learning paths for students.",
          "AI in Creativity: Generating music, art, and even stories.",
        ],
      },
    ],
  },
  {
    id: "2",
    title: "Top 5 Tips for Remote Work Productivity",
    date: "2025-07-15",
    thumbnail: images.BLOG1,
    content: [
      {
        type: "paragraph",
        value:
          "Remote work has become the new normal, but staying productive outside of the office can be challenging. Here are five proven strategies to help you maintain focus and efficiency while working from home.",
      },
      {
        type: "list",
        value: [
          "Create a dedicated workspace free from distractions.",
          "Follow a daily routine with clear working hours.",
          "Use productivity tools like Notion, Trello, or Asana.",
          "Take regular breaks to avoid burnout.",
          "Stay connected with your team through video calls.",
        ],
      },
      {
        type: "image",
        value: "https://picsum.photos/seed/work/800/400",
      },
      {
        type: "paragraph",
        value:
          "By applying these strategies, remote workers can strike a balance between flexibility and productivity, ensuring long-term success.",
      },
    ],
  },
  {
    id: "3",
    title: "Exploring the Beauty of Nature Through Travel",
    date: "2025-06-10",
    thumbnail: images.BLOG1,
    content: [
      {
        type: "paragraph",
        value:
          "Traveling allows us to reconnect with nature, discover hidden landscapes, and experience cultures in their purest forms. From serene beaches to breathtaking mountains, the world is full of wonders.",
      },
      {
        type: "video",
        value: "https://www.youtube.com/embed/dQw4w9WgXcQ",
      },
      {
        type: "paragraph",
        value:
          "Some of the most unforgettable travel experiences come from exploring less touristy destinations, where authenticity and tranquility merge.",
      },
      {
        type: "list",
        value: [
          "Hiking in the Swiss Alps.",
          "Relaxing on the beaches of Maldives.",
          "Exploring rainforests in Costa Rica.",
          "Camping under the Northern Lights in Norway.",
        ],
      },
      {
        type: "image",
        value: "https://picsum.photos/seed/travel/800/400",
      },
    ],
  },
];
