import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Notes from './pages/Notes/Notes';
import Create from './pages/Create/Create';
import Layout from './components/Layout/Layout';
import { ThemeProvider } from "@mui/material";
import theme from './globals/theme';
import Edit from './pages/Edit/Edit';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Layout>
        <Routes>
          <Route path='/' element={<Notes />} />
          <Route path='/create' element={<Create />} />
          <Route path='catatan/:id' element={<Create />} />
        </Routes>
      </Layout>
    </ThemeProvider>
  );
}

export default App;
