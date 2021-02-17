import React, { useState } from "react";
// redux import
import { connect } from "react-redux";
// MaterialUI components imports
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import LocalLibraryIcon from "@material-ui/icons/LocalLibrary";
// Custom components imports
import Search from "./Search";
import BookCard from "./BookCard";
import Pagination from "./Pagination";
import LoadingProgress from "../reusable/LoadingProgress";

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
    justifyContent: "center",
  },
  searchGridStyle: {
    margin: "auto",
    paddingTop: "40px !important",
  },
  noBooksDivStyle: {
    width: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    textAlign: "center",
    minHeight: "80vh",
  },
  iconSize: {
    fontSize: "100px",
    width: "100%",
  },
  textSize: {
    fontSize: "30px",
  },
}));

function Homepage(props) {
  // custom stlye classes
  const classes = useStyles();
  // redux state destructuring
  const { books, loading } = props;
  // state props
  const [currentPage, setCurrentPage] = useState(1);
  const [booksPerPage] = useState(8);
  // pagination props
  const indexOfLastBook = currentPage * booksPerPage;
  const indexOfFirstBook = indexOfLastBook - booksPerPage;
  const curentBooks = books.slice(indexOfFirstBook, indexOfLastBook);
  const count = Math.ceil(books.length / booksPerPage);
  // conditional props
  const showBooks = books.length > 0;

  // function called when pagination number is changed
  const paginate = (page) => setCurrentPage(page);

  return (
    <Container className="h-100" maxWidth="xl">
      <div className={classes.root}>
        <Grid container spacing={4}>
          <Grid item md={6} sm={12} xs={12} className={classes.searchGridStyle}>
            <Search />
          </Grid>
          {showBooks ? (
            <>
              <Grid container className={classes.gridStyle}>
                {curentBooks.map((item) => (
                  <BookCard details={item} key={item.key} />
                ))}
              </Grid>
              <Grid item className="w-100 p-0">
                <Pagination count={count} paginate={paginate} />
              </Grid>
            </>
          ) : (
            // render page without books
            <div className={classes.noBooksDivStyle}>
              <p className={classes.textSize}>
                No book found, please insert different title
              </p>
              <LocalLibraryIcon className={classes.iconSize} />
            </div>
          )}
        </Grid>
        {loading && <LoadingProgress />}
      </div>
    </Container>
  );
}
// redux state props function
const mapStateToProps = (state /* , ownProps*/) => {
  return {
    books: state.appReducer.books,
    loading: state.appReducer.loading,
  };
};
// redux action functions object
const mapDispatchToProps = {};
// default export of the app connected with redux
export default connect(mapStateToProps, mapDispatchToProps)(Homepage);
