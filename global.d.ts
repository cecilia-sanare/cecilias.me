declare module '*.png' {
  const content: string;
  export default content;
}

declare module '*.module.scss' {
  const content: Record<string, string>;
  export default content;
  export = content;
}
