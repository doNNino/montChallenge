import React, { useState } from "react";
// redux import
import { connect } from "react-redux";
// MaterialUI components imports
import InputBase from "@material-ui/core/InputBase";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import SearchIcon from "@material-ui/icons/Search";
// Redux actions import
import { fetchBooks } from "../../redux/actions/appActions";

const useStyles = makeStyles((theme) => ({
  search: {
    borderRadius: theme.shape.borderRadius,
    width: "100%",
    border: "1px solid black",
  },
  inputRoot: {
    color: "inherit",
    width: "100%",
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    width: "100%",
  },
}));

function Search(props) {
  // custom style classes
  const classes = useStyles();
  // component state values
  const [searchValue, setSearchValue] = useState("");
  // updating the search value to the state
  const handleInputChange = (e) => {
    setSearchValue(e.target.value);
  };

  // destructuring redux actions
  const { fetchBooks } = props;
  return (
    <>
      <div className={classes.search}>
        <InputBase
          placeholder="Search…"
          onChange={handleInputChange}
          classes={{
            root: classes.inputRoot,
            input: classes.inputInput,
          }}
          inputProps={{ "aria-label": "search" }}
        />
      </div>
      <div className="w-100 text-center mt-4">
        <Button
          variant="contained"
          color="primary"
          onClick={() => fetchBooks(searchValue)}
          className={classes.button}
          startIcon={<SearchIcon />}
        >
          Search
        </Button>
      </div>
    </>
  );
}
// redux state props function
const mapStateToProps = (state /* , ownProps*/) => {
  return {};
};
// redux action functions object
const mapDispatchToProps = { fetchBooks };
// default export of the app connected with redux
export default connect(mapStateToProps, mapDispatchToProps)(Search);
