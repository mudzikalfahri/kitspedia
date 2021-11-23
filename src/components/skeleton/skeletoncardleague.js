import React from "react";
import "./skeletoncardleague.css";
import Skeleton from "react-skeleton";
function SkeletonCardleague() {
  return (
    <>
      <Skeleton className="skeletonleague" />
      <Skeleton className="skeletonleague" />
      <Skeleton className="skeletonleague" />
      <Skeleton className="skeletonleague" />
      <Skeleton className="skeletonleague" />
    </>
  );
}

export default SkeletonCardleague;
