export const getPathData = (path: SVGPathElement) => {
  const parent = path.parentElement as unknown as SVGSVGElement | null;
  if (!parent) {
    return { dx: 0, dy: 0, totalLength: 0 };
  }
  const parentCoords = parent.getBoundingClientRect();
  const viewBox = parent.viewBox.animVal;
  const dx = parentCoords.width / viewBox.width;
  const dy = parentCoords.height / viewBox.height;
  const totalLength = path.getTotalLength();

  return { dx, dy, totalLength };
};
