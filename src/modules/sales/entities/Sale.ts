import {
  Entity,
  Column,
  JoinColumn,
  OneToOne,
  PrimaryColumn,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';

import Product from '@modules/products/entities/Product';
import Partner from '@modules/partners/entities/Partner';

@Entity('sales')
class Sale {
  @PrimaryGeneratedColumn('increment')
  order: number;

  @PrimaryColumn()
  @OneToOne(() => Product, product => product.id, { eager: true })
  @JoinColumn({ name: 'product_id' })
  product: number;

  @Column()
  quantity: number;

  @Column()
  sale_price: number;

  @OneToOne(() => Partner, partner => partner.id, { eager: true })
  @JoinColumn({ name: 'customer_id' })
  customer: Partner;

  @OneToOne(() => Partner, partner => partner.id, { eager: true })
  @JoinColumn({ name: 'seller_id' })
  seller: Partner;

  @Column()
  date: Date;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}

export default Sale;