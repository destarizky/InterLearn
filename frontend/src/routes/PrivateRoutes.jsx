import { Route, Routes } from 'react-router-dom';
import DashboardPage from '../pages/private/DashboardPage';
import CareerPage from '../pages/private/CareerPage';
import InprogressNone from '../pages/private/mycourses/Inprogressnone';
import CompletedNone from '../pages/private/mycourses/completednone';
import Inprogress from '../pages/private/mycourses/Inprogress';
import LearningQuizPage from '../pages/private/mycourses/learningquiz';
import LearningStartQuizPage from '../pages/private/mycourses/learningstartquiz';

const PrivateRoutes = () => {
    return (
        <Routes>
            <Route path="/dashboard/home" element={<DashboardPage />} />
            <Route path="/dashboard/career" element={<CareerPage />} />
            <Route path="/dashboard/mycourses/Inprogressnone" element={<InprogressNone />} />
            <Route path="/dashboard/mycourses/Completednone" element={<CompletedNone />} />
            <Route path="/dashboard/mycourses" element={<Inprogress />} />
            <Route path="/dashboard/workshop/learningquiz" element={<LearningQuizPage />} />
            <Route path="/dashboard/workshop/learningstartquiz" element={<LearningStartQuizPage />} />
        </Routes>
    );
};

export default PrivateRoutes;
