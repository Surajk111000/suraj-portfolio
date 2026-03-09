import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar'
import AchievementsPage from './pages/AchievementsPage'
import EducationPage from './pages/EducationPage'
import HobbiesPage from './pages/HobbiesPage'
import ProfilePage from './pages/ProfilePage'
import ProjectsPage from './pages/ProjectsPage'
import SocialPage from './pages/SocialPage'

function App() {
  return (
    <BrowserRouter>
      <div className="app-shell">
        <div className="outer-pattern" aria-hidden="true" />
        <Navbar />
        <div className="content-shell">
          <main className="page-wrap">
            <Routes>
              <Route path="/" element={<Navigate to="/profile" replace />} />
              <Route path="/profile" element={<ProfilePage />} />
              <Route path="/education" element={<EducationPage />} />
              <Route path="/social" element={<SocialPage />} />
              <Route path="/projects" element={<ProjectsPage />} />
              <Route path="/hobbies" element={<HobbiesPage />} />
              <Route path="/achievements" element={<AchievementsPage />} />
              <Route path="*" element={<Navigate to="/profile" replace />} />
            </Routes>
          </main>
        </div>
      </div>
    </BrowserRouter>
  )
}

export default App