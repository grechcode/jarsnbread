import { IconsLine } from "@/components";

export const RunningLine = ({ className }) => (
  <div className={className}>
    <IconsLine animation="runToRight" />
    <IconsLine animation="runToLeft" />
  </div>
);
