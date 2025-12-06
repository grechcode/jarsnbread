import { IconJar, IconBread, IconXMark } from "./icons";

const ICONS = {
  jar: IconJar,
  bread: IconBread,
  xMark: IconXMark,
};

export const Icon = ({ name, ...props }) => {
  const SvgComponent = ICONS[name];

  return SvgComponent ? <SvgComponent {...props} /> : null;
};
