import React from "react";
import axios from "axios";
const url = "https://hacker-news.firebaseio.com/v0/";
class NewStoryTemplate extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      by: '',
      title: '',
      url: '',
      date: ''
    };
    this.getStory(this.props.id);
    this.getStory = this.getStory.bind(this);
  }
  async getStory(id) {
    let data = await axios.get(url + "item/" + id + ".json");
    let date = new Date(data.data.time);
    this.setState({
      by: data.data.by,
      title: data.data.title,
      url: data.data.url,
      date: date.toLocaleString()
    });

  }
  render() {
    return (

      <a href={window.location.href + this.props.id} target="_blank" style={{ textDecoration: "none" }}>
        <div className="border border-success my-2 btn btn-block btn-success text-white">
          <h6 className="lead">{this.state.title}</h6>
          <hr />
          <div className="row my-0 py-0">
            <p className="ml-3 my-0 alert alert-secondary py-0"><span className="text-dark">By </span>{this.state.by}</p>
            <p className="ml-3 my-auto"><span className="text-dark">on </span>{this.state.date}</p>
          </div>
        </div>
      </a>

    );
  }
}
export default NewStoryTemplate;
