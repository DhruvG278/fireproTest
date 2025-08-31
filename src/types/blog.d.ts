export interface BlogType {
  id?: string;
  title: string;
  thumbnail?: any;
  date: string;
  content: {
    id?: string;
    type: "paragraph" | "image" | "video" | "list";
    value?: any;
  }[];
}
