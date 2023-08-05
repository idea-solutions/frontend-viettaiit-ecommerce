import "./circle-loader.scss";
import BounceLoader from "react-spinners/BounceLoader";
function CircleLoaderCustom({ className }) {
  return (
    <div className={`circle-loader ${className ? className : ""}`}>
      <div className="my-image"></div>
      <BounceLoader color="#36d7b7" />
    </div>
  );
}

export default CircleLoaderCustom;
