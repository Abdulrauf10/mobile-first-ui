import { useState, useEffect } from 'react';

export type FilterValues = {
  from: string | null;
  to: string | null;
  statuses: string[];
};

interface Props {
  onClose: () => void;
  onApply: (filters: FilterValues) => void;
  initialFilters: FilterValues;
}

const today = new Date().toISOString().split('T')[0];

const allStatuses = [
  'SUCCESS',
  'FAILED',
  'PENDING',
  'In Process',
  'CANCEL',
  'VOID',
  'REVERSAL',
];

export default function FilterModal({
  onClose,
  onApply,
  initialFilters,
}: Props) {
  const [from, setFrom] = useState<string | null>(initialFilters.from ?? today);
  const [to, setTo] = useState<string | null>(initialFilters.to ?? today);
  const [statuses, setStatuses] = useState<string[]>(initialFilters.statuses);

  useEffect(() => {
    setFrom(initialFilters.from ?? today);
    setTo(initialFilters.to ?? today);
    setStatuses(initialFilters.statuses);
  }, [initialFilters]);

  const toggleStatus = (status: string) => {
    setStatuses((prev) =>
      prev.includes(status)
        ? prev.filter((s) => s !== status)
        : [...prev, status],
    );
  };

  return (
    <div className="fixed inset-0 bg-black/40 flex items-end z-50">
      <div className="bg-white w-full rounded-t-xl p-4 max-h-[80%] overflow-y-auto">
        <div className="flex justify-center mb-3">
          <div className="w-10 h-1.5 bg-gray-300 rounded-full" />
        </div>

        <h2 className="font-semibold text-lg mb-4">Filter Data</h2>

        <div className="grid grid-cols-2 gap-3 mb-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Dari
            </label>

            <input
              type="date"
              value={from ?? ''}
              onChange={(e) => setFrom(e.target.value)}
              className="w-full px-3 py-2 text-sm rounded-md border border-blue-600 focus:border-blue-600 focus:ring focus:ring-blue-200"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Sampai
            </label>

            <input
              type="date"
              value={to ?? ''}
              onChange={(e) => setTo(e.target.value)}
              className="w-full px-3 py-2 text-sm rounded-md border border-blue-600 focus:border-blue-600 focus:ring focus:ring-blue-200"
            />
          </div>
        </div>

        <div className="mb-4">
          <p className="text-sm font-medium text-gray-700 mb-2">
            Status Transaksi
          </p>
          <div className="flex flex-wrap gap-2">
            {allStatuses.map((s) => (
              <button
                key={s}
                onClick={() => toggleStatus(s)}
                className={`px-3 py-1 rounded-xl text-sm border ${
                  statuses.includes(s)
                    ? 'bg-blue-600 text-white border-blue-600'
                    : 'bg-white text-blue-600 border-blue-600'
                }`}
              >
                {s}
              </button>
            ))}
          </div>
        </div>

        {/* Apply */}
        <button
          onClick={() => {
            onApply({ from, to, statuses });
            onClose();
          }}
          className="w-full bg-blue-600 text-white py-2 rounded-md font-medium"
        >
          Terapkan
        </button>
      </div>
    </div>
  );
}
