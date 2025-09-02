import "quill";

declare module "quill" {
  interface Quill {
    keyboard: {
      addBinding: (
        key: any,
        handler: (range: any, context: any) => void
      ) => void;
    };
  }
}
