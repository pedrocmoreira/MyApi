import { Role } from '@roles/entities/Role';
import { Exclude } from 'class-transformer';
import { randomUUID } from 'node:crypto';
import {
  Column,
  CreateDateColumn,
  Entity,
  ManyToOne,
  PrimaryColumn,
} from 'typeorm';

@Entity('users')
export class User {
  @PrimaryColumn()
  id?: string;

  @Column()
  name: string;

  @Column()
  email: string;

  @Column()
  @Exclude()
  password: string;

  @Column()
  isAdmin: boolean;

  @Column()
  avatar?: string;

  @ManyToOne(() => Role, {
    cascade: true,
  })
  role: Role;

  @CreateDateColumn()
  created_at: Date;

  constructor() {
    if (!this.id) {
      this.id = randomUUID();
    }
  }
}
