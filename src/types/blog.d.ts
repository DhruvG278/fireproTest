export interface BlogType {
  id?: string;
  title: string;
  thumbnail?: ThumbnailType;
  date: string;
  content: {
    id?: string;
    type: "paragraph" | "image" | "video" | "list";
    value?: any;
  }[];
}

export interface ThumbnailType {
  id?: string;
  url: string;
  type: "video" | "image";
  thumbnail?: string;
}
