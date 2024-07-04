import logo from './logo.svg';
import './App.css';
import MainPage from './MainPage/MainPage';
import {BrowserRouter as Router, Routes,Route, Link} from 'react-router-dom';
import ReactComponent from './component/ReactComponent';

function App() {
  return (
    <Router>
            <div>
                <Routes>
                    <Route path="/reactComponent" element={<ReactComponent />} />
                    <Route path="/" element={
                            <>
                                <MainPage/>
                            </>
                        } />
                </Routes>
                
            </div>
    </Router>
  );
}

export default App;
