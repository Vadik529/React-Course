import React, { Component } from "react";
import "../index.css";
import ModalWindow from "./ModalWindow";

class Posts extends Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: [],
      isModalOpen: false,
    };
  }
  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/posts/")
      .then((response) => response.json())
      .then((data) => this.setState({ posts: data }));
  }
  deletePost = (id) => {
    fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
      method: "DELETE",
    });
    this.setState({
      posts: this.state.posts.filter((post) => post.id !== id),
    });
  };
  showModal = (id) => {
    this.setState({
      isModalOpen: !this.state.isModalOpen,
    });
    const post = this.state.posts.find((el) => el.id === id)
    const index = this.state.posts.indexOf(post)
    const editArray = this.state.posts.filter((el) => el.id !== id)
    
  };
  render() {
    return (
        <>
        {this.state.isModalOpen && <ModalWindow titleValue={this.showModal}/>}
        <div className="wrapper">
          {this.state.posts.map((post) => (
              <div key={post.id} className="post">
              <div className="post__text">
                <h2>{post.title}</h2>
                <p>{post.body}</p>
              </div>
              <button className="post_button" onClick={() => this.showModal(post.id)}>
                Edit
              </button>
              <button
                className="post_button"
                onClick={() => this.deletePost(post.id)}
                >
                Delete
              </button>
            </div>
          ))}
        </div>
      </>
    );
  }
}

export default Posts;
