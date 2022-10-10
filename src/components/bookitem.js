import React from "react";
import Card from "react-bootstrap/Card";


export class BookItem extends React.Component {
    render() {
        return (
            <div>
                <Card>
                    <Card.Header><h3>{this.props.book.title}</h3></Card.Header>
                    <Card.Body>
                        <blockquote className="blockquote mb-0">
                            <img src={this.props.book.thumbnailUrl} width="200" height="300"></img>
                            <footer>
                                <p>{this.props.book.authors[0]}</p>
                            </footer>
                        </blockquote>
                    </Card.Body>
                </Card>
            </div>
        );
    }

}
