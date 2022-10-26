import { Fragment } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { publicRoutes } from '~/routes';
import { DefaultLayout } from './components/Layout';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          {publicRoutes.map((page, index) => {
            const Page = page.component;
            let Layout = DefaultLayout;
            if (page.layout) {
              Layout = page.layout;
            } else if (page.layout === null) {
              Layout = Fragment;
            }
            return (
              <Route
                key={index}
                path={page.path}
                element={
                  <Layout>
                    <Page />
                  </Layout>
                }
              />
            );
          })}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
