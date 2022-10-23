import React from "react";
import { Link, useLoaderData } from "react-router-dom";
import Card from "react-bootstrap/Card";
import { Button } from "react-bootstrap";
const News = () => {
  const news = useLoaderData();
  const { title, details, author,category_id, image_url } = news;
  return (
    <Card>
      <Card.Img variant="top" src={image_url} />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>{details}</Card.Text>
        <Link to={`/category/${category_id}`}>
          <Button variant="primary">All News In This Category</Button>
        </Link>
      </Card.Body>
    </Card>
  );
};

export default News;
