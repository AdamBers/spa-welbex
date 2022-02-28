import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import { useDispatch } from 'react-redux'
import { fetchTodos } from "./store/asyncAction/todos";
import { HomePage } from './pages/HomePage';
import { Header } from './components/Header';
import { TaskList } from "./pages/TaskList";
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const dispatch = useDispatch()
  dispatch(fetchTodos())

  return (
    <Router>
      <div className="App">
        <Header />
        <div className='content'>
          <Routes>
            <Route path='/' element={<HomePage />} />
            <Route path='/task' element={<TaskList />} />
          </Routes>
        </div>
      </div >
    </Router>
  );
}
export default App;
