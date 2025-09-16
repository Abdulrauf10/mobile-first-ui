import { NavLink } from 'react-router-dom';

const NAV_ITEMS = [
  {
    id: 'soal1',
    label: 'Soal 1',
    path: '/soal1',
    icon: (
      <svg
        className="w-6 h-6"
        fill="none"
        stroke="currentColor"
        strokeWidth={1.6}
        strokeLinecap="round"
        strokeLinejoin="round"
        viewBox="0 0 24 24"
      >
        <path d="M3 10.5L12 4l9 6.5V20a1 1 0 01-1 1h-5v-6H9v6H4a1 1 0 01-1-1V10.5z" />
      </svg>
    ),
  },
  {
    id: 'soal2',
    label: 'Soal 2',
    path: '/soal2',
    icon: (
      <svg
        className="w-6 h-6"
        fill="none"
        stroke="currentColor"
        strokeWidth={1.6}
        strokeLinecap="round"
        strokeLinejoin="round"
        viewBox="0 0 24 24"
      >
        <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
        <path d="M7 7h10M7 11h10M7 15h6" />
      </svg>
    ),
  },
  {
    id: 'soal3',
    label: 'Soal 3',
    path: '/soal3',
    icon: (
      <svg
        className="w-6 h-6"
        fill="none"
        stroke="currentColor"
        strokeWidth={1.6}
        strokeLinecap="round"
        strokeLinejoin="round"
        viewBox="0 0 24 24"
      >
        <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2" />
        <circle cx="12" cy="7" r="4" />
      </svg>
    ),
  },
];

export default function Navbar() {
  return (
    <nav className="fixed bottom-0 left-0 right-0 h-16 bg-white border-t border-gray-200 shadow-lg">
      <ul className="flex justify-around items-center h-full">
        {NAV_ITEMS.map((item) => (
          <li key={item.id}>
            <NavLink
              to={item.path}
              className={({ isActive }) =>
                `flex flex-col items-center justify-center px-3 py-2 transition-colors ${
                  isActive
                    ? 'text-blue-600 font-semibold'
                    : 'text-gray-500 hover:text-gray-700'
                }`
              }
            >
              {item.icon}
              <span className="text-xs">{item.label}</span>
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
}
