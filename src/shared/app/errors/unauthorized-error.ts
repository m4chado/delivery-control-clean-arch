export class UnauthorizedError extends Error {
  constructor(public message: string) {
    super(message);
    this.name = 'UnauthorizedError';
  }
}
