import React from 'react';
import { Router } from 'react-router';
import AppProvider from './context';
import Routes from './routes';
import GlobalStyle, { Container, Main } from './styles/global';
import history from './routes/history';
import Header from './components/Header';
import SideBar from './components/SideBar';

function App() {
  return (
    <>
      <AppProvider>
        <Router history={history}>
          <Container>
            <Header />
            <Main>
              <SideBar />
              <Routes />
            </Main>
          </Container>
        </Router>
      </AppProvider>
      <GlobalStyle />
    </>
  );
}

export default App;
