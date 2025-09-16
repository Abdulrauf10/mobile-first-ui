import type { Transaction } from '../data/transactions';
import StatusBadge from './StatusBadge';

export default function TransactionCard({ tx }: { tx: Transaction }) {
  return (
    <div className="bg-white rounded-lg shadow-sm p-4">
      <div className="flex justify-between items-center">
        <p className="text-sm font-bold">No. Ref : {tx.ref}</p>
        <StatusBadge status={tx.status} />
      </div>
      <p className="text-blue-600 font-semibold mt-1">
        Rp{tx.amount.toLocaleString('id-ID')}
      </p>
      <div className="flex justify-between items-center">
        <p className="text-sm text-gray-600">{tx.product}</p>
        <p className="text-xs text-gray-600 mt-1">
          {new Date(tx.date).toLocaleString('id-ID')}
        </p>
      </div>
    </div>
  );
}
