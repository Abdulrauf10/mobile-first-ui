export type TransactionStatus =
  | 'All Transaction'
  | 'SUCCESS'
  | 'PENDING'
  | 'FAILED'
  | 'In Process'
  | 'CANCEL'
  | 'VOID'
  | 'REVERSAL';

export interface Transaction {
  id: string;
  ref: string;
  amount: number;
  product: string;
  date: string;
  status: TransactionStatus;
}

export const transactions: Transaction[] = [
  {
    id: '1',
    ref: 'RT142401234567890',
    amount: 102000,
    product: 'PLN PREPAID',
    date: '2024-01-11T08:45:51Z',
    status: 'FAILED',
  },
  {
    id: '2',
    ref: 'RT142401234567891',
    amount: 115000,
    product: 'GOPAY CUST',
    date: '2024-01-12T10:15:30Z',
    status: 'SUCCESS',
  },
  {
    id: '3',
    ref: 'RT142401234567892',
    amount: 25000,
    product: 'OVO TOPUP',
    date: '2024-01-13T09:20:00Z',
    status: 'PENDING',
  },
  {
    id: '4',
    ref: 'RT142401234567893',
    amount: 50000,
    product: 'PULSA TELKOMSEL',
    date: '2024-01-14T12:00:00Z',
    status: 'CANCEL',
  },
  {
    id: '5',
    ref: 'RT142401234567894',
    amount: 200000,
    product: 'PLN POSTPAID',
    date: '2024-02-01T14:45:00Z',
    status: 'SUCCESS',
  },
  {
    id: '6',
    ref: 'RT142401234567895',
    amount: 75000,
    product: 'SHOPEE PAY',
    date: '2024-02-02T16:30:00Z',
    status: 'VOID',
  },
  {
    id: '7',
    ref: 'RT142401234567896',
    amount: 180000,
    product: 'BPJS KESEHATAN',
    date: '2024-02-05T11:10:00Z',
    status: 'SUCCESS',
  },
  {
    id: '8',
    ref: 'RT142401234567897',
    amount: 99000,
    product: 'INDOSAT PULSA',
    date: '2024-02-07T08:25:00Z',
    status: 'FAILED',
  },
  {
    id: '9',
    ref: 'RT142401234567898',
    amount: 150000,
    product: 'GOJEK DRIVER',
    date: '2024-02-10T19:00:00Z',
    status: 'REVERSAL',
  },
  {
    id: '10',
    ref: 'RT142401234567899',
    amount: 30000,
    product: 'DANA WALLET',
    date: '2024-03-01T07:50:00Z',
    status: 'In Process',
  },
  {
    id: '11',
    ref: 'RT142401234567900',
    amount: 120000,
    product: 'PLN PREPAID',
    date: '2024-03-05T13:25:00Z',
    status: 'SUCCESS',
  },
  {
    id: '12',
    ref: 'RT142401234567901',
    amount: 64000,
    product: 'MYBILLS',
    date: '2024-03-08T18:40:00Z',
    status: 'PENDING',
  },

  // ==== 2025 ====
  {
    id: '13',
    ref: 'RT252401234567902',
    amount: 88000,
    product: 'PLN PREPAID',
    date: '2025-01-15T09:00:00Z',
    status: 'SUCCESS',
  },
  {
    id: '14',
    ref: 'RT252401234567903',
    amount: 145000,
    product: 'GOPAY CUST',
    date: '2025-02-02T11:20:00Z',
    status: 'FAILED',
  },
  {
    id: '15',
    ref: 'RT252401234567904',
    amount: 52000,
    product: 'OVO TOPUP',
    date: '2025-02-10T17:45:00Z',
    status: 'CANCEL',
  },
  {
    id: '16',
    ref: 'RT252401234567905',
    amount: 210000,
    product: 'BPJS KESEHATAN',
    date: '2025-03-03T08:30:00Z',
    status: 'SUCCESS',
  },
  {
    id: '17',
    ref: 'RT252401234567906',
    amount: 99000,
    product: 'DANA WALLET',
    date: '2025-03-12T19:15:00Z',
    status: 'REVERSAL',
  },
  {
    id: '18',
    ref: 'RT252401234567907',
    amount: 150000,
    product: 'PLN POSTPAID',
    date: '2025-04-01T14:10:00Z',
    status: 'VOID',
  },
  {
    id: '19',
    ref: 'RT252401234567908',
    amount: 27500,
    product: 'PULSA TELKOMSEL',
    date: '2025-04-05T07:45:00Z',
    status: 'In Process',
  },
  {
    id: '20',
    ref: 'RT252401234567909',
    amount: 135000,
    product: 'SHOPEE PAY',
    date: '2025-05-20T12:55:00Z',
    status: 'SUCCESS',
  },
];
