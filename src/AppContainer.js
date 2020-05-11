import React from "react";
import {connect } from "react-redux";
import { searchPhotosThunk } from "./redux/photosReducer";
import App from "./App";

const AppContainer = props => {
  const onSubmit = value => {
    props.searchPhotosThunk(value.searchValue)
  }
  return <App {...props} onSubmit={onSubmit}/>
};

const mapStateToProps = (state) => {
  return {
    images: state.photos.images,
    photos: state.photos.photos
  };
};

const mapDispatchToProps = {
  searchPhotosThunk,
};

export default connect(mapStateToProps, mapDispatchToProps)(AppContainer);