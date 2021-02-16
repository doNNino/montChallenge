import React from "react";
// redux import
import { connect } from "react-redux";
// MaterialUI components imports
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
// Custom components imports
import Search from "./Search";
import BookCard from "./BookCard";
import BasicPagination from "../bookList/Pagination";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
  gridStyle: {
    padding: "25px",
  },
  searchGridStyle: {
    margin: "auto",
  },
}));

function Homepage(props) {
  // custom stlye classes
  const classes = useStyles();
  // redux state destructuring
  const { books } = props;
  return (
    <Container className="h-100" maxWidth="xl">
      <div className={classes.root}>
        <Grid container spacing={4} className="mt-2">
          <Grid item md={6} sm={12} xs={12} className={classes.searchGridStyle}>
            <Search />
          </Grid>
          <Grid container className={classes.gridStyle}>
            {books.map((item) => (
              <BookCard details={item} key={item.key} />
            ))}
          </Grid>
          <BasicPagination />
        </Grid>
      </div>
    </Container>
  );
}
// redux state props function
const mapStateToProps = (state /* , ownProps*/) => {
  return {
    books: state.appReducer.books,
  };
};
// redux action functions object
const mapDispatchToProps = {};
// default export of the app connected with redux
export default connect(mapStateToProps, mapDispatchToProps)(Homepage);
