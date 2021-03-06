import React, { useState } from "react";
// redux import
import { connect } from "react-redux";
// Material UI imports
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
import CardDetailsDialog from "../cardDetailDialog/CardDetailsDialog";
import axios from "axios";
// custom components
import LoadingProgress from "../reusable/LoadingProgress";
// redux acitons import
import { loadingSet } from "../../redux/actions/appActions";

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 236,
    maxHeight: 432,
    cursor: "pointer",
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
function BookCard(props) {
  //dialog props
  const [open, setOpen] = useState(false);
  const [worksDetails, setWorksAPIDetails] = useState({});
  const [editionsDetails, setEditionsAPIDetails] = useState({});
  // redux state props
  const { loading, loadingSet } = props;
  const handleClickOpen = async () => {
    try {
      loadingSet(true);
      const worksAPIDetails = details.key
        ? await axios.get(`https://openlibrary.org${details.key}.json`)
        : {};
      const editionsAPIDetails = details.isbn
        ? await axios.get(
            `https://openlibrary.org/isbn/${details.isbn[0]}.json`
          )
        : {};
      setWorksAPIDetails(worksAPIDetails.data ? worksAPIDetails.data : {});
      setEditionsAPIDetails(
        editionsAPIDetails.data ? worksAPIDetails.data : {}
      );
      loadingSet(false);
    } catch (e) {
      loadingSet(false);
      alert("ERROR FETCHING DATA BECAUSE OF CORS POLICY");
      console.log(e);
    }
    if (!loading) {
      setOpen(true);
    }
  };

  const handleClose = () => {
    setOpen(false);
  };
  // custom style classes
  const classes = useStyles();
  // destructuring props
  const { details } = props;
  // book details
  const authorName = details.author_name ? details.author_name[0] : "Unknown";
  const authorInitials =
    authorName.match(/[A-Z]/g) !== null
      ? authorName.match(/[A-Z]/g).join("")
      : "";
  const subject = details.subject ? details.subject[0] : "Unknown";
  const publisher = details.publisher ? details.publisher[0] : "Unknown";
  const time = details.time ? details.time[0] : "Unknown";
  const title = details.title_suggest ? details.title.suggest : "No title";
  const publishYear = details.first_publish_year
    ? details.first_publish_year
    : "Unknown";
  const imageSrc = details.cover_i
    ? `http://covers.openlibrary.org/b/ID/${details.cover_i}-M.jpg`
    : noImage;
  return (
    <Grid item lg={3} md={4} sm={6} xs={12} className={classes.gridStyle}>
      <Card className={classes.root} onClick={handleClickOpen}>
        <CardHeader
          avatar={
            <Avatar aria-label="recipe" className={classes.avatar}>
              {authorInitials}
            </Avatar>
          }
          title={title}
          subheader={`First publish year: ${publishYear}`}
        />
        <CardMedia className={classes.media} image={imageSrc} title={title} />
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
      {open && (
        <CardDetailsDialog
          open={open}
          handleClickOpen={handleClickOpen}
          handleClose={handleClose}
          bookDetails={details}
          worksDetails={worksDetails}
          editionsDetails={editionsDetails}
          classes={classes}
        />
      )}
      {loading && <LoadingProgress />}
    </Grid>
  );
}
// redux state props function
const mapStateToProps = (state /* , ownProps*/) => {
  return {
    loading: state.appReducer.loading,
  };
};
// redux action functions object
const mapDispatchToProps = { loadingSet };
// default export of the app connected with redux
export default connect(mapStateToProps, mapDispatchToProps)(BookCard);
