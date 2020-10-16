export default interface ICreatePartnerServiceDTO {
  name: string;
  address: string;
  phone: string;
  type: "customer" | "seller";
}
