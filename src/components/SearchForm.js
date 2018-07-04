import React, { Component } from 'react';
import { Button, Form, Input, InputGroup, InputGroupAddon } from 'reactstrap';

class SearchForm extends Component {

    constructor(props) {
        super(props);
        this.state = {
            username: ''
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
                console.log(data);
            })
    }

    render() {
        let input;
        return (
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
        );
    }
}

export { SearchForm };
