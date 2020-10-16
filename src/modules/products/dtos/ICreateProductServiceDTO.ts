export default interface ICreateAppointmentDTO {
  name: string;
  description: string;
  brand: string;
  provider: string;
  classification: string;
  cost_price: number;
  sale_price: number;
  stock_quantity: number;
  store_quantity: number;
}
