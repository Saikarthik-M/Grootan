import React from "react";
import axios from "axios";
import TopStoryTemplate from "./topstorytemplate";
const url = "https://hacker-news.firebaseio.com/v0/";
class TopStories extends React.Component {
    constructor() {
        super();
        this.state = {
            data: []
        };
        this.getTopStories();
        this.getTopStories = this.getTopStories.bind(this);
    }
    tenStory(data) {
        let ten = [];
        for (let i = 0; i < 10; i++) {
            ten[i] = data.data[i];
        }
        return ten;
    }
    async getTopStories() {
        let data1 = await axios.get(url + "topstories.json");
        data1 = this.tenStory(data1);
        this.setState({ data: data1 });
    }
    render() {
        return (
            <div className="container fluid">
                <h1 className="display-4 text-center my-5">Top Story</h1>
                {Object.entries(this.state.data).map((item) => {
                    return <TopStoryTemplate key={item[0]} id={item[1]} />;
                })}
            </div>
        );
    }
}

export default TopStories;
