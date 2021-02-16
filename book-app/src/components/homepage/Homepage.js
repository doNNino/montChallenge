import React, { useState } from "react";
// redux import
import { connect } from "react-redux";
// MaterialUI components imports
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
// Custom components imports
import Search from "./Search";
import BookCard from "./BookCard";
import Pagination from "./Pagination";

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
    justifyContent: "center",
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
  // state props
  const [currentPage, setCurrentPage] = useState(1);
  const [booksPerPage] = useState(8);
  // pagination props
  const indexOfLastBook = currentPage * booksPerPage;
  const indexOfFirstBook = indexOfLastBook - booksPerPage;
  const curentBooks = books.slice(indexOfFirstBook, indexOfLastBook);
  const count = Math.ceil(books.length / booksPerPage);

  // function called when pagination number is changed
  const paginate = (page) => setCurrentPage(page);

  return (
    <Container className="h-100" maxWidth="xl">
      <div className={classes.root}>
        <Grid container spacing={4}>
          <Grid item md={6} sm={12} xs={12} className={classes.searchGridStyle}>
            <Search />
          </Grid>
          <Grid container className={classes.gridStyle}>
            {curentBooks.map((item) => (
              <BookCard details={item} key={item.key} />
            ))}
          </Grid>
          <Grid item className="w-100 p-0">
            <Pagination count={count} paginate={paginate} />
          </Grid>
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
