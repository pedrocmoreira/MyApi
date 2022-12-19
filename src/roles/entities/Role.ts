import { randomUUID } from 'node:crypto';

export class Role {
  id?: string;
  name: string;
  created_at: Date;

  constructor() {
    if (!this.id) {
      this.id = randomUUID();
    }
  }
}
