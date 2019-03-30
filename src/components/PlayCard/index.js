import React from "react";
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia"
import { CardActionArea } from "@material-ui/core";

function PlayCard(props) {

  const { data } = props;
  console.log(data)
  const playCards = data.map(image => (
    <Card>
      <CardActionArea >
        <CardMedia
          component="img"
          alt="Contemplative Reptile"
          className="card-image"
          // width="120px"
          height="120px"
          image={image}
          title="puppy"
        />
      </CardActionArea>
    </Card>
  ));

  console.log(playCards);

  return <div>{playCards}</div>;
}

export default PlayCard;
