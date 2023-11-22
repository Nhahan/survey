import { Column, Entity } from 'typeorm';
import { BaseEntity } from '../../../common/orm/base.entity';

@Entity()
export class Survey extends BaseEntity {
  @Column()
  title: string;

  @Column()
  description: string;
}
