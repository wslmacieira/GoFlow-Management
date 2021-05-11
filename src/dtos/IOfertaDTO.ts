interface ICreateOfertaDTO {
  id_customer: string;
  from: string;
  to: string;
  initial_value: number;
  amount: number;
  amount_type: string;
}

export { ICreateOfertaDTO };
