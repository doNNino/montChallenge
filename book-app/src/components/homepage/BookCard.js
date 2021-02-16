import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import Avatar from "@material-ui/core/Avatar";
import Typography from "@material-ui/core/Typography";
import { red } from "@material-ui/core/colors";
import Grid from "@material-ui/core/Grid";
import noImage from "../../no-image.png";

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 236,
    maxHeight: 432,
  },
  media: {
    height: 0,
    paddingTop: "56.25%", // 16:9
  },
  expand: {
    transform: "rotate(0deg)",
    marginLeft: "auto",
    transition: theme.transitions.create("transform", {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: "rotate(180deg)",
  },
  avatar: {
    backgroundColor: red[500],
  },
  gridStyle: {
    display: "flex",
    justifyContent: "center",
    paddingTop: "30px !important",
    width: 360,
    height: 374,
  },
}));
// start of the component
export default function BookCard(props) {
  // custom style classes
  const classes = useStyles();
  // destructuring props
  const { details } = props;
  // book details
  const authorName = details.author_name ? details.author_name[0] : "";
  const authorInitials =
    authorName.match(/[A-Z]/g) !== null
      ? authorName.match(/[A-Z]/g).join("")
      : "";
  const subject = details.subject ? details.subject[0] : "";
  const publisher = details.publisher ? details.publisher[0] : "";
  const time = details.time ? details.time[0] : "";
  const imageSrc = details.cover_i
    ? `http://covers.openlibrary.org/b/ID/${details.cover_i}-M.jpg`
    : noImage;
  return (
    <Grid item lg={3} md={4} sm={6} xs={12} className={classes.gridStyle}>
      <Card className={classes.root} onClick={() => console.log("radi")}>
        <CardHeader
          avatar={
            <Avatar aria-label="recipe" className={classes.avatar}>
              {authorInitials}
            </Avatar>
          }
          title={details.title_suggest}
          subheader={`First publish year: ${details.first_publish_year}`}
        />
        <CardMedia
          className={classes.media}
          image={imageSrc}
          title="Paella dish"
        />
        <CardContent>
          <Typography variant="body2" color="textSecondary" component="p">
            Author: {authorName}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Time: {time}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Subject: {subject}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Publisher: {publisher}
          </Typography>
        </CardContent>
      </Card>
    </Grid>
  );
}
