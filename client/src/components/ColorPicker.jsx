/* eslint-disable */

import { SketchPicker } from "react-color";
import { useSnapshot } from "valtio";

import state from "../store";

const ColorPicker = () => {
  const snap = useSnapshot(state);

  return (
    <div className="absolute left-full ml-3">
      <SketchPicker
        color={snap.color}
        disableAlpha
        presetColors={[
          "#ccc",
          "#EFBD4E",
          "#80C670",
          "#353934",
          "#2CCCE4",
          "#512314",
          "#FF96AD",
        ]}
        onChange={(color) => (state.color = color.hex)}
      />
    </div>
  );
};

export default ColorPicker;
