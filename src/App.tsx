import { FC, Suspense } from 'react';
import { Provider } from 'react-redux';
import { store } from './store';
import { ROUTES } from './routes/routes';
import { NavBar, RenderRoutes, Search } from './components';
import { BrowserRouter } from './routes';

const App: FC = () => (
  <div data-testid='App'>
    <Provider store={store}>
      <Suspense fallback='loading'>
        <NavBar />
        <Search />
        <BrowserRouter>
          <RenderRoutes routes={ROUTES} />
        </BrowserRouter>
      </Suspense>
    </Provider>
  </div>
);

export default App;
