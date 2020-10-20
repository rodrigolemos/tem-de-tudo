import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity('products')
class Product {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column('varchar')
  name: string;

  @Column('varchar')
  description: string;

  @Column('varchar')
  brand: string;

  @Column('varchar')
  provider: string;

  @Column('varchar')
  classification: string;

  @Column('float')
  cost_price: number;

  @Column('float')
  sale_price: number;

  @Column('integer')
  stock_quantity: number;

  @Column('integer')
  store_quantity: number;

  @Column('varchar')
  status: string;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}

export default Product;