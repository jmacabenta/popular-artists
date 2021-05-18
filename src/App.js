import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import PopularArtistsPage from './PopularArtistsPage';
import ArtistPage from './ArtistPage';

const App = () => {
    return (
        <Router>
            <Switch>
                <Route exact path="/">
                    <PopularArtistsPage />
                </Route>
                <Route path="/artist/:id">
                    <ArtistPage />
                </Route>
            </Switch>
        </Router>
    );
};

export default App;
