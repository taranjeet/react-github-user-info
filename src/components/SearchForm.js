import React, { Component } from 'react';
import { Button, Form, Input, InputGroup, InputGroupAddon } from 'reactstrap';

import { UserCard } from './UserCard';

class SearchForm extends Component {

    constructor(props) {
        super(props);
        this.state = {
            username: '',
            fullName: '',
            avatarUrl: '',
            publicRepos: '',
            followers: 0,
            following: 0

        };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.apiUrl = 'https://api.github.com/users';
    }

    handleChange(e) {
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    handleSubmit(event) {
        event.preventDefault();
        console.log(this.state.username);
        fetch(`${this.apiUrl}/${this.state.username}`)
            .then(res => res.json())
            .then(data => {
                const {
                    name: fullName,
                    avatar_url: avatarUrl,
                    public_repos: publicRepos,
                    followers,
                    following,
                } = data;
                this.setState({
                    fullName,
                    avatarUrl,
                    publicRepos,
                    followers,
                    following
                })
            })
    }

    render() {
        let input;
        return (
            <div>
            <Form onSubmit={this.handleSubmit}>
                <InputGroup>
                    <Input
                        name='username'
                        value={this.state.username}
                        onChange={this.handleChange}
                    />
                    <InputGroupAddon addonType="append">
                        <Button color="success">Search</Button>
                    </InputGroupAddon>
                </InputGroup>
            </Form>
            <UserCard
                fullname={this.state.fullName}
                followers={this.state.followers}
                following={this.state.following}
                publicRepos={this.state.publicRepos}
            />
            </div>
        );
    }
}

export { SearchForm };
