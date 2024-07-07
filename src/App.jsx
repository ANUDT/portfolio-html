//single page application creation  for react and router client side
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import styled, { ThemeProvider } from 'styled-components';
import Header from './components/header';
import Footer from './components/footer'
import AboutMe from './components/aboutMe';
import Contact from './components/contact';
import Project from './components/project';
import Resume from './components/resume';
import Skills from './components/skills.jsx'
import { lightTheme } from './utils/Themes.jsx';
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
    <ThemeProvider theme={lightTheme}>
      <Body>
        <Router>
          <Header />
          <main>
            <Routes>
              <Route path="/" element={<AboutMe />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/project" element={<Project />} />
              <Route path="/resume" element={<Resume />} />
              <Route path="/skills" element={<Skills />} />

            </Routes>
          </main>
          <Footer />
        </Router>
      </Body>
    </ThemeProvider>  
  );
}

export default App;