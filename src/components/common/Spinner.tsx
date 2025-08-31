"use client";

import GridLoader from "react-spinners/GridLoader";

const Spinner = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
    >
      <GridLoader color="var(--color-logo)" size={20} />
    </div>
  );
};

export default Spinner;
