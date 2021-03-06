import React from 'react';
import { Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle} from 'reactstrap';
import {Loading} from './LoadingComponent';

function RenderCard({item,isLoading,errMess }) {
    if (isLoading) {
        return(
            <div className="container">
                <div className="row">            
                    <Loading />
                </div>
            </div>
        );
    }
    else if (errMess) {
        return(
            <div className="container">
                <div className="row"> 
                    <div className="col-12">
                        <h4>{errMess}</h4>
                    </div>
                </div>
            </div>
        );
    }
    else return(
        <Card>
            <CardImg src={item.image} alt={item.name} />
            <CardBody>
            <CardTitle>{item.name}</CardTitle>
            <CardSubtitle>{item.price}</CardSubtitle>
            <CardText>{item.description}</CardText>
            </CardBody>
        </Card>
    );

}

function Home(props) {
     return(
        <div className="container">
            <div className="row align-items-start">
                <div className="col-12 col-md m-1">
                    <RenderCard item={props.course[0]} isLoading={props.courseLoading} errMess={props.courseErrMess} />
                </div>
                <div className="col-12 col-md m-1">
                <RenderCard item={props.course[1]} isLoading={props.courseLoading} errMess={props.courseErrMess} />
                </div>
                <div className="col-12 col-md m-1">
                <RenderCard item={props.course[2]} isLoading={props.courseLoading} errMess={props.courseErrMess} />
                </div>
            </div>
        </div>
    );
}

export default Home;