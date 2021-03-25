import React from "react";
import { useDispatch } from "react-redux";
import { loadingNewPhotos } from "../store/photos";
import PhotosContent from "./PhotosContent";
import PhotosLoadMore from "./PhotosLoadMore";

const Photos = () => {
  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(loadingNewPhotos(1));
  }, [dispatch]);

  return (
    <section>
      <PhotosContent />
      <PhotosLoadMore />
    </section>
  );
};

export default Photos;
