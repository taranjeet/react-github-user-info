import React from 'react';
import { Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button } from 'reactstrap';

const UserCard = ({fullName, publicRepos, followers, following}) => {
    return (
        <div>
        <Card>
        <CardBody>
            <CardTitle>{fullName}</CardTitle>
            <CardSubtitle>{publicRepos}</CardSubtitle>
            <CardSubtitle>{followers}</CardSubtitle>
            <CardSubtitle>{following}</CardSubtitle>
        </CardBody>
        </Card>
    </div>

    );
}

export { UserCard };
