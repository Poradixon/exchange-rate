export interface Currency {
  base: string;
  date: Date;
  rates: {
    USD: number,
    GBP: number,
    PLN: number,
    CHF: number
  };
}
