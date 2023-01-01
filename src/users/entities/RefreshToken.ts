import { Column, CreateDateColumn, Entity, PrimaryColumn } from 'typeorm';
import { randomUUID } from 'node:crypto';

@Entity('refresh_tokens')
export class RefreshToken {
  @PrimaryColumn()
  id?: string;

  @Column()
  token: string;

  @Column()
  valid: boolean;

  @Column()
  user_id: string;

  @Column()
  expires: Date;

  @CreateDateColumn()
  created_at: Date;

  constructor() {
    if (!this.id) {
      this.id = randomUUID();
    }
  }
}
