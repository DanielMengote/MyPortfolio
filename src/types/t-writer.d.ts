declare module 't-writer.js' {
  export default class Typewriter {
    constructor(target: HTMLElement, options?: any);
    type(text: string): this;
    strings(...args: (string | number)[]): this
    rest(ms: number): this;
    clear(): this;
    start(): this;
    remove(count: number): this;
    changeOps(options: any): this;
  }
}
