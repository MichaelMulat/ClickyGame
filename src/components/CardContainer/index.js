import React from "react";
import Grid from "@material-ui/core/Grid";
// import PlayCard from "../PlayCard";
import Card from "@material-ui/core/Card";

function CardContainer(props) {
  const { cardArray, handleClick } = props;

  const playCards = cardArray.map(image => (
    <Grid item xs key={image.id}>
      <Card
        id={image.id}
        onClick={handleClick}
        style={{
          width: "200px",
          height: "200px",
          backgroundImage: `url(${image.url})`,
          backgroundSize: "cover"
        }}
      />
    </Grid>
  ));

  return (
    <div
      style={{
        flexGrow: 1,
        marginTop: "20px",
        maxWidth: "960px",
        marginLeft: "auto",
        marginRight: "auto"
      }}
    >
      <Grid container spacing={8}>
        {playCards}
      </Grid>
    </div>
  );
}

export default CardContainer;
