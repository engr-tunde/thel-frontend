import BounceLoader from "react-spinners/BounceLoader";

const Loader = ({ size = 50, color = "#000" }) => {
  return (
    <div
      style={{
        height: "100%",
        width: "100%",
        margin: "auto",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <BounceLoader
        color={color}
        loading={true}
        size={size}
        aria-label="Loading Spinner"
        data-testid="loader"
      />
    </div>
  );
};

export default Loader;
