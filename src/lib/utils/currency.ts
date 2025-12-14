export const currencies = [
  {
    name: 'XAF',
    symbol: 'FCFA',
    position: 'after',
    rate: 1,
  },
  {
    name: 'XOF',
    symbol: 'FCFA',
    position: 'after',
    rate: 1,
  },
  {
    name: 'NGN',
    symbol: '₦',
    position: 'before',
    rate: 0.92,
  },
  {
    name: 'GHS',
    symbol: 'GH₵',
    position: 'before',
    rate: 0.014,
  },
  {
    name: 'USD',
    symbol: '$',
    position: 'before',
    rate: 0.0016,
  },
  {
    name: 'EUR',
    symbol: '€',
    position: 'after',
    rate: 0.0015,
  },
] as const;

export type Currency = typeof currencies[number];
export type CurrencyName = Currency['name'];
