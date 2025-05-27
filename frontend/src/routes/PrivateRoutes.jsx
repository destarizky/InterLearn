import { Route, Routes } from 'react-router-dom';
import DashboardPage from '../pages/private/DashboardPage';

const PrivateRoutes = () => {
    return (
        <Routes>
            <Route path="/dashboard/home" element={<DashboardPage />} />
        </Routes>
    );
};

export default PrivateRoutes;
