import { useContext } from 'react';
import { AppContext } from '../context/AppContext';

const DebugBox = () => {
  const { token, userData } = useContext(AppContext);

  return (
    <div className="fixed bottom-0 right-0 bg-white text-xs border p-2 z-50 shadow-lg max-w-sm">
      <strong>Token:</strong> {token ? '✅' : '❌'} <br />
      <strong>User:</strong> {userData ? JSON.stringify(userData) : '❌ Not Loaded'}
    </div>
  );
};

export default DebugBox;
