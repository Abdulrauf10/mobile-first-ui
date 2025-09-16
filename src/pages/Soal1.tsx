import { useState } from 'react';
import { transactions } from '../data/transactions';
import TransactionCard from '../components/TransactionCard';
import FilterModal from '../components/FilterModal';
import type { FilterValues } from '../components/FilterModal';
import { VscSettings } from 'react-icons/vsc';
import notfound from '../assets/notfound.png';

const today = new Date().toISOString().split('T')[0];

export default function History() {
  const [showFilter, setShowFilter] = useState(false);
  const [filters, setFilters] = useState<FilterValues>({
    from: today,
    to: today,
    statuses: [],
  });

  const filtered = transactions.filter((tx) => {
    const txDate = new Date(tx.date).toISOString().split('T')[0];

    if (filters.from && txDate < filters.from) return false;
    if (filters.to && txDate > filters.to) return false;

    if (filters.statuses.length > 0) {
      if (!filters.statuses.includes(tx.status)) return false;
    }

    return true;
  });

  return (
    <div className=" pb-20">
      <h1 className="text-xl font-bold mb-1.5">History</h1>
      <div className="flex bg-gray-100 rounded-lg overflow-hidden mb-4">
        <button className="flex-1 py-2 bg-blue-600 text-white font-medium">
          History
        </button>
        <button className="flex-1 py-2 text-gray-600">Summary</button>
      </div>

      <div className="flex justify-between items-center mb-4 bg-gray-300 p-3">
        <p className="text-sm text-gray-800">
          {filters.from ?? 'Start'} - {filters.to ?? 'End'}
        </p>
        <button
          onClick={() => setShowFilter(true)}
          className="text-blue-600 text-xl font-medium flex items-center gap-1"
        >
          <VscSettings />
          <span className="text-gray-800 text-sm">Filter</span>
        </button>
      </div>

      <div className="space-y-3">
        {filtered.length > 0 ? (
          filtered.map((tx) => <TransactionCard key={tx.id} tx={tx} />)
        ) : (
          <div className="flex justify-center items-center h-[60vh] mt-10">
            <img
              src={notfound}
              alt="No data"
              className="w-60 h-60 mb-4 rounded-3xl"
            />
          </div>
        )}
      </div>

      {showFilter && (
        <FilterModal
          initialFilters={filters}
          onClose={() => setShowFilter(false)}
          onApply={(f) => setFilters(f)}
        />
      )}
    </div>
  );
}
