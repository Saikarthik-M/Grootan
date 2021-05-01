import React from "react";
import ReactDOM from "react-dom";
import NewStories from "./newstories";
import "bootstrap/dist/css/bootstrap.min.css";
import TopStories from "./topstories";
import BestStories from "./beststories";
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import StoryPage from "./storypage";
class HomePage extends React.Component {
  render() {
    return (
      <div>
        <NewStories />
        <TopStories />
        <BestStories />
      </div>
    );
  }
}
ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={HomePage} />
      <Route path="/:id" component={StoryPage} />
    </Switch></BrowserRouter>
  , document.getElementById("root"));
