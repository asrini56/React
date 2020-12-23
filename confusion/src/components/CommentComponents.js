import React, {Component} from 'react';
import { Card, CardImg, CardText, CardBody,CardImgOverlay,
    CardTitle } from 'reactstrap';

class Comment extends Component{
    render(){
        const dish = this.props.selectedDish;
        if (dish != null)
            return(
                <Card>
                    <CardBody>
                      <CardTitle>Comments</CardTitle>
                      <CardText>Rating = {dish.comments[dish.id].rating}<br></br>
                      Comment = {dish.comments[dish.id].comment}
                    <br></br>
                    author = {dish.comments[dish.id].author}<br></br>
                    Date = {dish.comments[dish.id].date}
                    </CardText>
                    </CardBody>
                </Card>
            );
        else
            return(
                <div></div>
            );
    }
}
export default Comment;