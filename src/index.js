import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { Spinner } from "./loader";

const componentNames = [
  "Audio",
  "BallTriangle",
  "Bars",
  "Circles",
  "Grid",
  "Hearts",
  "Oval",
  "Puff",
  "Rings",
  "TailSpin",
  "ThreeDots",
  "Watch",
  "RevolvingDot",
  "Triangle",
  "Plane",
  "MutatingDots",
  "CradleLoader"
];

function componentName(type) {
  if (componentNames.includes(type)) {
    return Spinner[type];
  }
  return Spinner.Audio;
}

/**
 * @return {null}
 */
export default function Loader(props) {
  const [display, setDisplay] = useState(true);

  useEffect(() => {
    if (props.timeout && props.timeout > 0) {
      setTimeout(() => {
        setDisplay(false);
      }, props.timeout);
    }
  });

  if (!props.visible || props.visible === "false") {
    return null;
  }
  return display ? (
    <div aria-busy="true" className={props.className} style={props.style}>
      {React.createElement(componentName(props.type), { ...props })}
    </div>
  ) : null;
}

Loader.propTypes = {
  type: PropTypes.oneOf([...componentNames]),
  style: PropTypes.objectOf(PropTypes.string),
  className: PropTypes.string,
  visible: PropTypes.oneOfType([PropTypes.bool, PropTypes.string]),
  timeout: PropTypes.number
};

Loader.defaultProps = {
  type: "Audio",
  style: {},
  className: "",
  visible: true,
  timeout: 0
};
