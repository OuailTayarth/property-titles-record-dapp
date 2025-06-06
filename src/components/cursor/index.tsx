import React from "react";
import mouseEffect from "../../common/mouseEffect";

const Cursor = (): JSX.Element => {
  React.useEffect(() => {
    mouseEffect();
  }, []);
  return (
    <>
      <div className="mouse-cursor cursor-outer"></div>
      <div className="mouse-cursor cursor-inner"></div>
    </>
  );
};

export default Cursor;
