export interface BlogType {
  id: string;
  title: string;
  thumbnail?: string;
  date: string;
  content: {
    type: "paragraph" | "image" | "video" | "list";
    value?: any;
  }[];
}
