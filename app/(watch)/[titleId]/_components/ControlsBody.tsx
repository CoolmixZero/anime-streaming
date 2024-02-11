"use client";

import { FastForward, FastRewind, Pause } from "@mui/icons-material";

const ControlsBody = () => {
  return (
    <div className="flex items-center justify-center">
      <div className="p-3">
        <FastRewind fontSize="medium" />
      </div>

      <div className="p-3">
        <Pause fontSize="medium" />
      </div>

      <div className="p-3">
        <FastForward fontSize="medium" />
      </div>
    </div>
  );
};

export default ControlsBody;
