import type { TransactionStatus } from '../data/transactions';

const colors: Record<TransactionStatus, string> = {
  SUCCESS: 'bg-green-600 text-white',
  FAILED: 'bg-red-600 text-white',
  PENDING: 'bg-yellow-500 text-white',
  CANCEL: 'bg-gray-500 text-white',
  'In Process': 'bg-blue-500 text-white',
  VOID: 'bg-purple-500 text-white',
  REVERSAL: 'bg-orange-500 text-white',
  'All Transaction': 'bg-slate-600 text-white',
};

export default function StatusBadge({ status }: { status: TransactionStatus }) {
  return (
    <span className={`px-2 py-1 rounded text-xs font-medium ${colors[status]}`}>
      {status}
    </span>
  );
}
