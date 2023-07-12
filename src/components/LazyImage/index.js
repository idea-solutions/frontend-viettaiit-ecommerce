import { LazyLoadImage } from "react-lazy-load-image-component";

function LazyImage({ src, className }) {
  return (
    <LazyLoadImage
      className={className ? className : ""}
      src={src}
      effect="true"
      alt=""
    />
  );
}

export default LazyImage;
