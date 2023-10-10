import React from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
const PlaceCard = (props) => {
    let rating = Math.floor(Math.random() * (5 - 3) + 3);
    let ratingArray= new Array(rating);
    for(let i = 0;i<rating;i++){
        ratingArray[i] = "⭐";
    }
  return (
    <Card style={{ width:"320px" }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="170"
          image={props.imageLink}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {props.title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus, aliquid atque repellat doloribus odio fugiat optio sapiente dolore.
          </Typography>
          <div style={{display:"flex"}}>
            {ratingArray.map((r)=>{
                return <p>{r}</p>
            })}
          </div>
        </CardContent>
      </CardActionArea>
    </Card>
  )
}

export default PlaceCard