import { Box } from '@mui/material';
import './App.css';

import Footer from './components/Footer';
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
      <Footer />
    </Box>
  );
}

export default App;
