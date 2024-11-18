import { useTheme } from '../context/ThemeContext';

export default function ThemeBtn({ label }) {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      style={{
        padding: '10px 20px',
        fontSize: '16px',
        backgroundColor: theme === 'light' ? '#007bff' : '#444',
        color: '#fff',
        border: 'none',
        borderRadius: '5px',
        cursor: 'pointer',
      }}
      name='submit'
    >
      {label} (Current theme: {theme})
    </button>
  );
}
