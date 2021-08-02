import React, { Suspense } from "react";

const withSuspense = (Component: React.FC, fallback: any) => {
  return (
    <Suspense fallback={fallback}>
      <Component />
    </Suspense>
  );
};

export default withSuspense;
