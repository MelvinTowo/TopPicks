//import React, { Component } from 'react'
import NavBar from './NavBar'
import * as React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import './Favourites.css';
import { Grid } from '@mui/material';


const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}));

export default function RecipeReviewCard() {
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };
  return (

    <>
    <NavBar />
    <div className="Container">
    
  <Grid container>
    <Grid item xs={2}>
      <Card sx={{ maxWidth: 345 }}>

        <CardHeader className="Header"
          avatar={
            <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
              MA
            </Avatar>
          }
          action={
            <IconButton aria-label="settings">
              <MoreVertIcon />
            </IconButton>
          }
          title="Cigarets"
          subheader="September 14, 2016"
        />
        <CardMedia
          component="img"
          height="194"
          image="https://i.insider.com/60fec3cc28e2cf001890708d?width=700"
          alt="Paella dish"
        />  
        <CardContent>
          <Typography variant="body2" color="text.secondary">
            This impressive Cigarrete offers alot of diffrent flavours with a good hit so that the costumer is always satisfird with the company product
          </Typography>
        </CardContent>
        <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
            <FavoriteIcon />
          </IconButton>
          <ExpandMore
            expand={expanded}
            onClick={handleExpandClick}
            aria-expanded={expanded}
            aria-label="show more"
          >
            <ExpandMoreIcon />
          </ExpandMore>
        </CardActions>
        <Collapse in={expanded} timeout="auto" unmountOnExit>
          <CardContent>
            <Typography paragraph>
            Marlboro is the biggest brand in the world of cigarettes. Marlboro cigarettes are made in dubai.

Marlboro uses very high quality of tobacco. The price of 1 cigarette of Marlboro is 16 Rs and full packet price is 130 Rs. Taste of cigarette is very good. It has flavors of cardmom and clove.

Marlboro cigarette are available in various verity: -

1) Marlboro Ragular

2) Marlboro advance

3) marlboro menthol

4) marlboro clove mix

You can get this cigarette near any bettel shop and genral shop easily.

Packaging of Marlboro is premium. Packet looks very nice.

So, if you a Smoker and you did not try marlboro then Use it. You will fall in love with it.
            </Typography>
          </CardContent>
        </Collapse>
        </Card>
        </Grid>
        <Grid item xs={2}>
      <Card sx={{ maxWidth: 345 }}>

        <CardHeader className="Header"
          avatar={
            <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
              MA
            </Avatar>
          }
          action={
            <IconButton aria-label="settings">
              <MoreVertIcon />
            </IconButton>
          }
          title="Newyork"
          subheader="October 14, 2020"
        />
        <CardMedia
          component="img"
          height="194"
          image="https://i.natgeofe.com/k/5b396b5e-59e7-43a6-9448-708125549aa1/new-york-statue-of-liberty_4x3.jpg"
          alt="Paella dish"
        />
        <CardContent>
          <Typography variant="body2" color="text.secondary">
            New york is one of the most famous cities in the us it offers alot of thing for the tourist such as:
            Good food, good sight seeing places and much more things to do 
          </Typography>
        </CardContent>
        <CardActions disableSpacing>
          <IconButton aria-label="add to favorites">
            <FavoriteIcon />
          </IconButton>
          <ExpandMore
            expand={expanded}
            onClick={handleExpandClick}
            aria-expanded={expanded}
            aria-label="show more"
          >
            <ExpandMoreIcon />
          </ExpandMore>
        </CardActions>
        <Collapse in={expanded} timeout="auto" unmountOnExit>
          <CardContent>
            <Typography paragraph>New york Review:</Typography>
            <Typography paragraph>
            New York City occupies a special place in the American consciousness as the tumultuous seat of our financial markets and the buzzing capital of our culture. New York is celebrated for its wealth of nationalities, ethnicities and languages. But why would anyone want to live in NYC? It's insanely expensive, there are too many crazy people, it's bundles of energy and famously, "If you can make it in New York, you can make it anywhere." And lots of people love the challenge! Most important, it’s the city that exemplifies American pluralism, the “melting pot” that attracts new immigrants looking for work and college graduates drawn from their hometowns by the promise of excitement and opportunity. Its appeal hangs on its image as a city where everyone can try, get, and be anything. It has been my home for more than 40 years and I love it for its social and economic freedoms. My education and computer technology background fit right in and I found great career and social successes.
            </Typography>
            
          </CardContent>
        </Collapse>
        </Card>
        </Grid>
        <Grid item xs={2}>
      <Card sx={{ maxWidth: 345 }}>

        <CardHeader className="Header"
          avatar={
            <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
              MA
            </Avatar>
          }
          action={
            <IconButton aria-label="settings">
              <MoreVertIcon />
            </IconButton>
          }
          title="COD Black ops 3"
          subheader="January 7, 2015"
        />
        <CardMedia
          component="img"
          height="194"
          image="https://upload.wikimedia.org/wikipedia/en/b/b1/Black_Ops_3.jpg"
          alt="Paella dish"
        />
        <CardContent>
          <Typography variant="body2" color="text.secondary">
          Call of Duty: Black Ops III is a 2015 first-person shooter game developed by Treyarch and published by Activision. It is the twelfth entry in the Call of Duty series and the sequel to the 2012 video game Call of Duty: Black Ops II.
          </Typography>
        </CardContent>
        <CardActions disableSpacing>
          <IconButton aria-label="add to favorites">
            <FavoriteIcon />
          </IconButton>
          
          <ExpandMore
            expand={expanded}
            onClick={handleExpandClick}
            aria-expanded={expanded}
            aria-label="show more"
          >
            <ExpandMoreIcon />
          </ExpandMore>
        </CardActions>
        <Collapse in={expanded} timeout="auto" unmountOnExit>
          <CardContent>
            <Typography paragraph>Black ops 3:</Typography>
            <Typography paragraph>
            It's the greatest Black Ops title in the series, even dethroning the greats and classics of Black Ops I & II. What I mainly and thoroughly enjoyed about the game is the Zombies mode. It launched with one of the greatest on-disc zombies maps to date, 'Shadows of Evil'. The classic tale of 4 sinners come to life in the sprawling mysterious town known as 'Morg City'. The game play and action here is great and engaging to any player. The core experience of the Zombies mode is still intact such as Pack-A-Punching while also innovating in other areas with gobble gum and the new system known as "Beast Mode". 
            </Typography>
           
          </CardContent>
        </Collapse>
        </Card>
        </Grid>

        <Grid item xs={2}>
        <Card sx={{ maxWidth: 300 }}>
        <CardHeader
          avatar={
            <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
              AK
            </Avatar>
          }
          action={
            <IconButton aria-label="settings">
              <MoreVertIcon />
            </IconButton>
          }
          title="Honda Accord"
          subheader="March 5, 2020"
        />
        <CardMedia
          component="img"
          height="194"
          image="https://cars.usnews.com/static/images/Auto/izmo/i159163880/2020_honda_accord_angularfront.jpg"
          alt="Paella dish"
        />
        <CardContent>
          <Typography variant="body2" color="text.secondary">
            This impressive Car offers alot of new fetures that the driver will appreciate. the 2020 honda accord is a great car for daily commute .
          </Typography>
        </CardContent>
        <CardActions disableSpacing>
          <IconButton aria-label="add to favorites">
            <FavoriteIcon />
          </IconButton>
          
          <ExpandMore
            expand={expanded}
            onClick={handleExpandClick}
            aria-expanded={expanded}
            aria-label="show more"
          >
            <ExpandMoreIcon />
          </ExpandMore>
        </CardActions>
        <Collapse in={expanded} timeout="auto" unmountOnExit>
          <CardContent>
            <Typography paragraph>Honda Accord 2020:</Typography>
            <Typography paragraph>
            The lineup starts with a 192-hp turbocharged 1.5-liter four-cylinder, but our favorite is the 252-hp turbocharged 2.0-liter four-cylinder that sits atop the engine pyramid and can come with either a six-speed manual or a 10-speed automatic that shifts with an almost seamless nature. Both engines are smooth operators, but the 2.0-liter offers a rush of power that can easily spin the front tires in first gear. A hybrid is also available and is powered by a four-cylinder and two electric motors. The Accord's chassis is well sorted and encourages the driver to push the car hard through corners, where it exhibits a minimal amount of body roll. The steering is light, as befits a car in this class.
            </Typography>
          
          </CardContent>
        </Collapse>
      </Card>
      </Grid>
    </Grid>
    </div>
    
    </>
  );
}
