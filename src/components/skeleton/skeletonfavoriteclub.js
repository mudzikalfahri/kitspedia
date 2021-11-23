import React from "react";
import "./skeletonfavoriteclub.css";
import Skeleton from "react-skeleton";

function SkeletonFavoriteClub() {
  return (
    <div className="skeleton-slider">
      <Skeleton className="skeleton" />
      <Skeleton className="skeleton" />
      <Skeleton className="skeleton" />
    </div>
  );
}

export default SkeletonFavoriteClub;
