import React, { Component } from 'react';
import { Button, Form, Input, InputGroup, InputGroupAddon } from 'reactstrap';

class SearchForm extends Component {

    render() {
        let input;
        return (
            <Form>
                <InputGroup>
                    <Input innerRef={node => {input=node}}/>
                    <InputGroupAddon addonType="append">
                        <Button color="success">Search</Button>
                    </InputGroupAddon>
                </InputGroup>
            </Form>
        );
    }

}

export { SearchForm };
