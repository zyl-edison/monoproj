export interface Runnable {
  init? (): void; // Optional
  run(): void;
}
