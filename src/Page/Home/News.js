import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const News = () => {
    const newsData = useLoaderData();
    console.log(newsData);

    return (
        <div>
            <Card >
                <Card.Img variant="top" src={newsData?.image_url} />
                <Card.Body>
                    <Card.Title>{newsData?.title}</Card.Title>
                    <div className='d-flex justify-content-between'>
                        <p>
                            {newsData?.author?.name}
                        </p>
                        <p>
                            {newsData?.author?.published_date}
                        </p>
                        <p>
                            {newsData?.rating?.number}
                        </p>
                    </div>
                    <Card.Text>
                    {
                        newsData?.details

                    }
                    </Card.Text>
                    <Link to={`/categories/${newsData?.category_id}`}>
                    <Button variant="primary">Go All news Cetagories</Button>
                    </Link>
                   
                </Card.Body>
            </Card>
        </div>
    );
};

export default News;