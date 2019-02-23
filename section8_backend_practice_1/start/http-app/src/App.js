import React, { Component } from "react";
import "./App.css";
import config from "./config.json";
import http from "./services/httpService";

class App extends Component {
  state = {
    posts: []
  };

  async componentDidMount() {
    const response = await http.get(config.apiEndpoint);
    this.setState({ posts: response.data });
  }

  handleAdd = async () => {
    const obj = { title: "a" };
    await http.post(config.apiEndpoint, obj);
    const { data: posted1 } = await http.post(config.apiEndpoint, obj);

    const posts = [posted1, ...this.state.posts];
    this.setState({ posts });
  };

  handleUpdate = async post => {
    post.title = "Updated by Singh";

    await http.put(config.apiEndpoint + "weaer" + post.id, post);

    const posts = [...this.state.posts];
    const index = posts.indexOf(post);
    posts[index] = post;
    this.setState({ posts });
  };

  handleDelete = async post => {
    const original_posts = [...this.state.posts];

    const uptdated_posts = this.state.posts.filter(
      posts => posts.id !== post.id
    );
    this.setState({ posts: uptdated_posts });

    try {
      await http.delete(config.apiEndpoint + "qwer" + post.id);
    } catch (exception) {
      console.log("HandLE Delete , catch block");
      //Expected Error
      if (exception.response && exception.response.status === 404) {
        alert("This post has already been deleted");
      }
      this.setState({ posts: original_posts });
    }
  };

  render() {
    return (
      <React.Fragment>
        <button className="btn btn-primary" onClick={this.handleAdd}>
          Add
        </button>
        <table className="table">
          <thead>
            <tr>
              <th>Title</th>
              <th>Update</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {this.state.posts.map(post => (
              <tr key={post.id}>
                <td>{post.title}</td>
                <td>
                  <button
                    className="btn btn-info btn-sm"
                    onClick={() => this.handleUpdate(post)}
                  >
                    Update
                  </button>
                </td>
                <td>
                  <button
                    className="btn btn-danger btn-sm"
                    onClick={() => this.handleDelete(post)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </React.Fragment>
    );
  }
}

export default App;
