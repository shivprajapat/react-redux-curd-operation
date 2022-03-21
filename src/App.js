import Home from './components/Home';
import AddUser from './components/AddUser'
import {
  Routes,
  Route,
} from "react-router-dom";
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';

function App() {
  return (
    <Container maxWidth="md">
      <Box sx={{ paddingTop: 5 }}>
        <div className="App">
          <Routes>
            <Route path='/' exact element={<Home />} />
            <Route path='/add-user' element={<AddUser />} />
          </Routes>
        </div>
      </Box>
    </Container>
  );
}

export default App;
