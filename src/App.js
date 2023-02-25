import { Box } from '@mui/material';
import './App.css';
import Landing from './components/Landing';
import Menu from './components/Menu';

function App() {
  const sx = {
    overflowX: "hidden",
  }

  return (
    <Box className="App" maxWidth={"100vw"} sx={sx}>
      <Landing />
      <Menu />
    </Box>
  );
}

export default App;
