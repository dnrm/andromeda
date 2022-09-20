export interface OrderType {
  id?: string;
  created_at?: string;
  customerEmail: string;
  products: {};
  deliveryDate: Date;
  total: number;
  paymentType?: string;
}
