import React from 'react';
import { Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button, Media } from 'reactstrap';

const UserCard = ({fullName, publicRepos, followers, following, avatarUrl}) => {
    if (fullName) {
        return (
            <div className="row">
                <div className="col-8 offset-sm-2">
                <Card>
                <div className="row">
                    <div className="col-4">
                        <CardImg top width="100%" src={avatarUrl} style={{ width: '200px' }} alt={fullName} />
                    </div>
                    <div className="col-4">
                        {fullName}
                    </div>
                </div>
                <CardBody>
                    <CardSubtitle>
                        <div className="row">
                            <div className="col-3">
                            Public Repos : {publicRepos}
                            </div>
                            <div className="col-3">
                            Followers : {followers}
                            </div>
                            <div className="col-3">
                            Following : {following}
                            </div>
                        </div>
                    </CardSubtitle>
                </CardBody>
                </Card>
            </div>
            </div>

        );
    }
    return (<div className="row"></div>);
}

export { UserCard };
