import './App.css';
import Main from './Views/Main';
import { Routes, Route} from "react-router-dom";
import Details from './Views/Details';
import Update from './Views/Update';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/people' exact element={<Main/>} />
        <Route path='/people/:id' exact element={<Details/>}/>
        <Route path='/people/:id/edit' exact element={<Update />}/>
      </Routes>
    </div>
  );
}

export default App;
