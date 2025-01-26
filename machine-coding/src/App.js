import logo from './logo.svg';
import './App.css';
import MainPage from './MainPage/MainPage';
import {BrowserRouter as Router, Routes,Route, Link} from 'react-router-dom';
import ReactComponent from './component/ReactComponent';
import ConditionalRendering from './component/ConditionalRendering';
import ApiDataFetch from './component/apiDataFetch';
import MultiSelection from './component/MultiSelection';
import FoodCard from './component/foodCard';
import HideShow from './component/passwordhideshow';
import StarRating from './component/StarRatingComponent';

function App() {
  return (
    <Router>
            <div>
                <Routes>
                    <Route path="/reactComponent" element={<ReactComponent />} />
                    <Route path="/conditionalRendering" element={<ConditionalRendering />} />
                    <Route path="/apiDataFetching" element={<ApiDataFetch />} />
                    <Route path="/multiselection" element={<MultiSelection/>}/>
                    <Route path="/foodCard" element={<FoodCard/>}/>
                    <Route path="/hideshow" element={<HideShow/>}/>
                    <Route path = "/StarRating" element={<StarRating/>}/>
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
