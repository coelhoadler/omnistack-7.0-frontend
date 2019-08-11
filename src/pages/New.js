import React, { Component } from 'react';
import api from '../services/api';

import NewPostForm from './NewStyles';

class New extends Component {

    state = {
        image: null,
        author: '',
        place: '',
        description: '',
        hashtags: '',
    }

    handleSubmit = async e => {
        e.preventDefault();
        console.log(this.state);

        const data = new FormData();
        data.append('image', this.state.image);
        data.append('author', this.state.author);
        data.append('place', this.state.place);
        data.append('description', this.state.description);
        data.append('hashtags', this.state.hashtags);

        await api.post('posts', data);
        this.props.history.push('/');
        
    }

    handleChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleImageChange = e => {
        this.setState({ image: e.target.files[0] });
    }

    render() {
        return (
            <NewPostForm onSubmit={this.handleSubmit}>
                <input type="file" name="" id="" onChange={this.handleImageChange} />

                <input 
                    type="text"
                    name="author"
                    placeholder="Nome do Autor"
                    onChange={this.handleChange}
                    value={this.state.author} />

                <input 
                    type="text"
                    name="place"
                    placeholder="Lugar do post"
                    onChange={this.handleChange}
                    value={this.state.place} />
                <input 
                    type="text"
                    name="description"
                    placeholder="Descricao do post"
                    onChange={this.handleChange}
                    value={this.state.description} />

                <input 
                    type="text"
                    name="hashtags"
                    placeholder="Hashtags do post"
                    onChange={this.handleChange}
                    value={this.state.hashtags} />

                <button type="submit">Postar</button>
            </NewPostForm>
        )
    }
}

export default New;