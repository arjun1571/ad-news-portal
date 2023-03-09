import React from 'react';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import Image from 'react-bootstrap/Image'
import { FaBookmark,FaShare, FaStar } from "react-icons/fa";


const NewsCart = ({news}) => {
    const {total_view,rating,title,image_url,details,_id}=news;
    const {img,name,published_date}= news.author;
    console.log(news);
    
    return (
        <div>
            <Card className=" mb-2">
                <Card.Header className='d-flex justify-content-between align-items-center'>
                    <div className='d-flex align-items-center'>
                        <Image src={img}
                        style={{height:60}}
                        roundedCircle 
                        alt="" />
                        <div className='ms-2'>
                            <p className='mb-0'>{name}</p>
                            <p>{published_date}</p>
                        </div>
                    </div>
                    <div>
                        <FaBookmark className='me-2'></FaBookmark>
                        <FaShare></FaShare>
                    </div>
                </Card.Header>
                <Card.Body>
                    <Card.Title>{title}</Card.Title>
                    <Card.Img variant='top' src={image_url}/>
                    <Card.Text>
                        {
                            details.length > 250 ? 
                            <p>{details.slice(0, 250) + "..."} <Link to={`/news/${_id}`}>Reade More</Link> </p> : <p>{details}</p>
                        }
                    </Card.Text>
                </Card.Body>
                <Card.Footer className="d-flex justify-content-between">
                    <div className='d-flex align-items-center'>
                        <FaStar className='text-warning me-2'></FaStar>
                        {rating?.number}
                    </div>
                    <div className='d-flex align-items-center'>
                        <FaStar className='text-warning me-2'></FaStar>
                        {total_view}
                    </div> 
                </Card.Footer>
            </Card>
        </div>
    );
};

export default NewsCart;