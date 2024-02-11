"use client"

import {
  FastForward,
  FastRewind,
  Pause,
  PlayArrow,
  SkipNext,
  VolumeUp,
} from "@mui/icons-material";
import ControlsHeader from "./ControlsHeader";
import ControlsBody from "./ControlsBody";
import ControlsFooter from "./ControlsFooter";

const ControlsContainer = () => {
  return (
    <div className="absolute top-0 bottom-0 right-0 left-0 flex flex-col justify-between bg-opacity-40 bg-black z-10">
      <ControlsHeader />
      <ControlsBody />
      <ControlsFooter />
    </div>
  )
}

export default ControlsContainer;