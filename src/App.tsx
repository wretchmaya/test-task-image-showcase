import './App.less';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { ImageList } from './components/ImageList/ImageList';
import { SelectedImage } from './components/SelectedImage/SelectedImage';
import { ROUTES } from './routes/routes';

function App() {
    return (
        <div className="App">
            <main>
                <Router>
                    <Routes>
                        <Route
                            path={ROUTES.DEFAULT}
                            element={<Navigate to={ROUTES.IMAGES} />}
                        />
                        <Route path={ROUTES.IMAGES} element={<ImageList />} />
                        <Route path={ROUTES.SELECTED_IMAGE} element={<SelectedImage />} />
                    </Routes>
                </Router>
            </main>
        </div>
    );
}

export default App;
