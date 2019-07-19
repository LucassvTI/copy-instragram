import React, { Component } from 'react';
import api from '../../services/api';

import { Container } from './styles';

export default class New extends Component {
  state = {
    image: null,
    author: '',
    place: '',
    description: '',
    hashtags: ''
  };

  handleSubmit = async e => {
    e.preventDefault();
    const data = new FormData();

    data.append('image', this.state.image);
    data.append('author', this.state.author);
    data.append('place', this.state.place);
    data.append('description', this.state.description);
    data.append('hashtags', this.state.hashtags);

    await api.post('posts', data)
    this.props.history.push('/');
  }

  handleImageChenge = e => {
    this.setState({ image: e.target.files[0] });
  }

  handleChange = e => {
    this.setState({ [e.target.name ]: e.target.value });
  }

  render() {
    return (
    <Container onSubmit={this.handleSubmit}>
      <input type="file" onChange={this.handleImageChenge}/>

      <input 
      type="text"
      name="author"
      placeholder="Autor do post"
      onChange={this.handleChange}
      value={this.state.author}
      />
      <input 
      type="text"
      name="place"
      placeholder="Local do post"
      onChange={this.handleChange}
      value={this.state.place}
      />
      <input 
      type="text"
      name="description"
      placeholder="Description do post"
      onChange={this.handleChange}
      value={this.state.description}
      />
      <input 
      type="text"
      name="hashtags"
      placeholder="Hashtags do post"
      onChange={this.handleChange}
      value={this.state.hashtags}
      />
      <button type="submit">Enviar</button>
    </Container>
    );
  }
}
