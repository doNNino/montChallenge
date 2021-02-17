import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import LinearProgress from "@material-ui/core/LinearProgress";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    position: "fixed",
    zIndex: 1,
    top: 0,
    left: 0,
    backgroundColor: "rgba(0, 0, 0, 0.1)",
    height: "100%",
  },
}));

export default function LoadingProgress() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <LinearProgress />
    </div>
  );
}
