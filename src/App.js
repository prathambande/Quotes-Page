import React, { Suspense } from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import Layout from "./components/layout/Layout";
import LoadingSpinner from "./components/UI/LoadingSpinner";
// import AllQuotes from "./pages/AllQuotes";
// import NewQuotes from "./pages/NewQuote";
// import NotFound from "./pages/NotFound";
// import QuoteDetail from "./pages/QuoteDetail";


const NewQuotes = React.lazy(() =>  import("./pages/NewQuote"));
const AllQuotes = React.lazy(() =>  import("./pages/AllQuotes"));
const QuoteDetail = React.lazy(() =>  import("./pages/QuoteDetail"));
const NotFound = React.lazy(() =>  import("./pages/NotFound"));

function App() {
  return (
    <Layout>
      <Suspense fallback={<div className="centered"><LoadingSpinner/></div>}>
      <Switch>
        <Route path="/" exact>
          <Redirect to="/quotes" />
        </Route>
        <Route path="/quotes" exact>
          <AllQuotes />
        </Route>
        <Route path="/quotes/:quoteId">
          <QuoteDetail />
        </Route>
        <Route path="/new-quote">
          <NewQuotes />
        </Route>
        <Route path="*">
          <NotFound/>
        </Route>
      </Switch>
      </Suspense>
    </Layout>
  );
}

export default App;
