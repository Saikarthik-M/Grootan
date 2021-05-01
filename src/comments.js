import React from "react";
import axios from "axios";
const url = "https://hacker-news.firebaseio.com/v0/";
class Comments extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            by: '',
            comment: '',
            date: ''
        }
        this.getComment(this.props.url);
        this.getComment = this.getComment.bind(this);

    }
    async getComment(id) {

        let data = await axios.get(url + "item/" + id + ".json");
        let date = new Date(data.data.time);
        this.setState({
            by: data.data.by,
            comment: data.data.text,
            date: date.toLocaleString()
        });
    }
    render() {
        return (
            <div class="btn w-100 text-dark my-3" style={{ backgroundColor: "orange", pointerEvents: "none" }}>
                <div class="row my-0 py-0">
                    <h6 class="ml-5 mr-auto my-0 py-0 text-white">{this.state.by}</h6>
                    <small class="mr-3 text-secondary">{this.state.date}</small>
                </div>
                <hr />
                <p style={{ overflow: "hidden" }}>{this.state.comment}</p>
            </div>
        )
    }
}

export default Comments;