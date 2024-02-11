"use client"

import { Slider } from "@/components/ui/slider"
import { PlayArrow, SkipNext, VolumeUp } from "@mui/icons-material"

const ControlsFooter = () => {
  return (
    <div className="flex  items-center justify-between">
      <div className="p-3">
        <PlayArrow fontSize="medium" />
      </div>
      <div className="p-3">
        <SkipNext fontSize="medium" />
      </div>
      <div className="p-3">
        <VolumeUp fontSize="medium" />
      </div>
      <Slider
              className={`p-1`} />
      <span>5/20</span>
    </div>
  )
}

export default ControlsFooter