import React from "react";
import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";
import Slide from "@material-ui/core/Slide";
import CardMedia from "@material-ui/core/CardMedia";
import DialogBodyContent from "./DialogBodyContent";
import noImage from "../../no-image.png";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function CardDetailsDialog({
  open,
  handleClickOpen,
  handleClose,
  bookDetails,
  worksDetails,
  editionsDetails,
  classes,
  loading,
}) {
  // image prop
  const imageSrc = bookDetails.cover_i
    ? `http://covers.openlibrary.org/b/ID/${bookDetails.cover_i}-L.jpg`
    : noImage;
  return (
    <div>
      <Dialog
        open={open}
        TransitionComponent={Transition}
        className={classes.dialogStyle}
        keepMounted
        onClose={handleClose}
        aria-labelledby="book-details-dialog"
        aria-describedby="book-details-dialog-description"
      >
        <DialogTitle id="dialog-book-title" className="w-100 text-center">
          Book Details
        </DialogTitle>
        <CardMedia
          className={classes.media}
          image={imageSrc}
          title={bookDetails.title}
        />
        <DialogBodyContent
          worksDetails={worksDetails}
          editionsDetails={editionsDetails}
          bookDetails={bookDetails}
        />
      </Dialog>
    </div>
  );
}
