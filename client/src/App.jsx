import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import { TasksPage } from './pages/TasksPage'
import { TaskFormPage } from './pages/TaskFormPage'
import { Navigation } from './components/Navigation'

function App() {
    return (
        /*
        el componente App define la estructura de tu aplicación y cómo los diferentes componentes deben ser renderizados según la URL. TasksPage y TaskFormPage son los componentes asociados a las rutas /tasks y /tasks-create respectivamente.
        */
        <BrowserRouter>
            <Navigation />
            <Routes>
                <Route path='/' element={<Navigate to="/tasks" />} />
                <Route path='/tasks' element={<TasksPage />} />
                <Route path='/tasks-create' element={<TaskFormPage />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;