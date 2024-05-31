import React from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { render } from 'react-dom';
import { GlobalStyle } from './lib/GlobalStyle';
import Collection from './features/Collection/Collection';
import CreateCard from './features/CreateCard/CreateCard';

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <GlobalStyle />
    <Router>
      <Switch>
        <Route exact path="/collection" component={Collection} />
        <Route exact path="/create-card" component={CreateCard} />
      </Switch>
    </Router>
  </QueryClientProvider>
);

render(<App />, document.getElementById('root'));
