import React from "react";
import axios from "axios";
import BestStoryTemplate from "./beststorytemplate";
const url = "https://hacker-news.firebaseio.com/v0/";
class BestStories extends React.Component {
    constructor() {
        super();
        this.state = {
            data: []
        };
        this.getBestStories();
        this.getBestStories = this.getBestStories.bind(this);
    }
    tenStory(data) {
        let ten = [];
        for (let i = 0; i < 10; i++) {
            ten[i] = data.data[i];
        }
        return ten;
    }
    async getBestStories() {
        let data1 = await axios.get(url + "beststories.json");
        data1 = this.tenStory(data1);
        this.setState({ data: data1 });
    }
    render() {
        return (
            <div class="container fluid">
                <h1 class="display-4 text-center my-5">Best Story</h1>
                {Object.entries(this.state.data).map((item) => {
                    return <BestStoryTemplate key={item[0]} id={item[1]} />;
                })}
            </div>
        );
    }
}

export default BestStories;
