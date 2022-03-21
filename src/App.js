import Home from './components/Home';
import AddUser from './components/AddUser'
import {
  Routes,
  Route,
} from "react-router-dom";
import Container from '@mui/material/Container';

function App() {
  return (
    <Container maxWidth="md">
      <div className="App">
        <Routes>
          <Route path='/' exact element={<Home />} />
          <Route path='/add-user' element={<AddUser />} />
        </Routes>
      </div>
    </Container>
  );
}

export default App;
