import { Route, Routes } from 'react-router';

import StartPage from '../pages/startPage/StartPage';
import Navigation from '../widgets/navigation/Navigation';

function App() {
  return (
    <div>
      <Navigation />
      <Routes>
        <Route path="/" element={<StartPage />} />
      </Routes>
    </div>
  );
}

export default App;
