import React from "react";
import axios from "axios";
import NewStoryTemplate from "./newstorytemplate";
const url = "https://hacker-news.firebaseio.com/v0/";
class NewStories extends React.Component {
  constructor() {
    super();
    this.state = {
      data: []
    };
    this.getNewStories();
    this.getNewStories = this.getNewStories.bind(this);
    this.tenStory = this.tenStory.bind(this);
  }
  tenStory(data) {
    let ten = [];
    for (let i = 2; i < 12; i++) {
      ten[i] = data.data[i];
    }
    return ten;
  }
  async getNewStories() {
    let data1 = await axios.get(url + "newstories.json");
    data1 = this.tenStory(data1);
    this.setState({ data: data1 });
  }
  render() {
    return (
      <div className="container fluid">
        <h1 className="display-4 text-center my-5">New Story</h1>
        {Object.entries(this.state.data).map((item) => {
          return <NewStoryTemplate key={item[0]} id={item[1]} />;
        })}
      </div>
    );
  }
}

export default NewStories;
