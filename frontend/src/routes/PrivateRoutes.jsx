import { Route, Routes } from 'react-router-dom';
import DashboardPage from '../pages/private/DashboardPage';
import InprogressNone from '../pages/private/mycourses/Inprogressnone';
import CompletedNone from '../pages/private/mycourses/completednone';
import Inprogress from '../pages/private/mycourses/Inprogress';

const PrivateRoutes = () => {
    return (
        <Routes>
            <Route path="/dashboard/home" element={<DashboardPage />} />
            <Route path="/dashboard/mycourses/Inprogressnone" element={<InprogressNone />} />
            <Route path="/dashboard/mycourses/Completednone" element={<CompletedNone />} />
            <Route path="/dashboard/mycourses" element={<Inprogress />} />
        </Routes>
    );
};

export default PrivateRoutes;
