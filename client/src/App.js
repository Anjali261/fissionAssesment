import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './pages/Login';
import Registration from './pages/Registration';
import Dashboard from './pages/dashboard';
import CreateForm from './pages/CreateForm';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<Registration />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/create-form" element={<CreateForm />} />

      </Routes>
    </Router>
  );
}

export default App;
