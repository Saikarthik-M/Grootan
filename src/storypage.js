import React from "react";
import axios from "axios";
import Comments from "./comments";
const url = "https://hacker-news.firebaseio.com/v0/";
class StoryPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            comments: [],
            url: "",
            date: '',
            by: '',
            title: ''
        }
        this.getStory(this.props.match.params.id);
        this.getStory = this.getStory.bind(this);
    }
    async getStory(id) {
        let data = await axios.get(url + "item/" + id + ".json");
        let date = new Date(data.data.time);
        this.setState({
            comments: (data.data.kids !== undefined) ? data.data.kids : [],
            url: data.data.url,
            date: date.toLocaleString(),
            by: data.data.by,
            title: data.data.title
        });
    }
    render() {
        return (
            <div className="container fluid my-5">
                <p><strong>Posted By </strong>: {this.state.by}</p>
                <p><strong>Posted On</strong> : {this.state.date}</p>
                <p><strong>Title </strong>: {this.state.title}</p>
                <p><strong>Story Link</strong> : <a href={this.state.url} target="_blank">{this.state.url}</a></p>
                <h3 className="lead my-4">Preview</h3>
                <iframe src={this.state.url} height="500px" width="100%" className="my-3"></iframe>
                <h3 className="lead my-4"><strong>Comments</strong></h3>
                {this.state.comments.map((item, id) => {
                    return <Comments key={id} url={item} />
                })}
                <p> {
                    this.state.comments.length == 0 ? "Be the first one to comment..." : ""
                }</p>
            </div>
        )
    }
}
export default StoryPage;
