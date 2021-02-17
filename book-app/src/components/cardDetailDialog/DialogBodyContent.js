import React from "react";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";

export default function DialogBodyContent({
  worksDetails,
  editionsDetails,
  bookDetails,
}) {
  const { description, first_publish_date, subject_people } = worksDetails;
  const { number_of_pages, publish_date } = editionsDetails;
  const {
    author_name,
    language,
    time,
    title,
    publisher,
    subject,
  } = bookDetails;
  // book details
  const descriptionDetails = description ? description.value : "no description";
  const firstPublishDate = first_publish_date ? first_publish_date : "Unknown";
  const bookCharacters = subject_people ? subject_people : [];
  const numberOfPages = number_of_pages ? number_of_pages : "Unknown";
  const publishDate = publish_date ? publish_date : "Unknown";
  const authorName = author_name ? author_name[0] : "Unknown";
  const titleDetails = title ? title : "No title";
  const languages = language ? language : "Unknown";
  const subjectDetails = subject ? subject[0] : "Unknown";
  const publisherDetails = publisher ? publisher[0] : "Unknown";
  const timeDetails = time ? time[0] : "Unknown";
  return (
    <DialogContent>
      <DialogContentText id="book-dialog-description">
        Title Details: {titleDetails}
      </DialogContentText>
      <DialogContentText id="book-dialog-description">
        Author Name: {authorName}
      </DialogContentText>
      <DialogContentText id="book-dialog-description">
        Number Of Pages:{numberOfPages}
      </DialogContentText>
      <DialogContentText id="book-dialog-description">
        Publisher Details: {publisherDetails}
      </DialogContentText>
      <DialogContentText id="book-dialog-description">
        Publish Date: {publishDate}
      </DialogContentText>
      <DialogContentText id="book-dialog-description">
        First Publish Date: {firstPublishDate}
      </DialogContentText>
      <DialogContentText id="book-dialog-description">
        Languages: {languages}
      </DialogContentText>
      <DialogContentText id="book-dialog-description">
        Time Details: {timeDetails}
      </DialogContentText>
      <DialogContentText id="book-dialog-description">
        Description Details: {descriptionDetails}
      </DialogContentText>
      <DialogContentText id="book-dialog-description">
        Book Characters: {bookCharacters}
      </DialogContentText>
      <DialogContentText id="book-dialog-description">
        Subject Details: {subjectDetails}
      </DialogContentText>
    </DialogContent>
  );
}
