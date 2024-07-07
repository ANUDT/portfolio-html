//single page application creation  for react and router client side
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import styled, { ThemeProvider } from 'styled-components';
import Header from './components/Header';
import Footer from './components/Footer'
import AboutMe from './components/AboutMe';
import Contact from './components/Contact';
import Project from './components/Project';
import Resume from './components/Resume';
import { darkTheme } from './utils/Themes.jsx';
import './App.css';

const Body = styled.div`
  background-color: ${props => props.theme.background};
  overflow-x: hidden;
  height: 100%
  width: 100%
`;


//displaying app with the elements header, footer, about me, contact, navigation, portfolio, project and resume
// it will render following the path given
function App() {
  return (
    <ThemeProvider theme={darkTheme}>
      <Body>Portfolio ADT</Body>
    </ThemeProvider>
  );
}

{
    <Router>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<AboutMe />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/project" element={<Project />} />
          <Route path="/resume" element={<Resume />} />
        </Routes>
      </main>
      <div/>;
      <Footer />
    </Router>
}

export default App;