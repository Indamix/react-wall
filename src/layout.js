const getCoordinates = (cols, index) => {
  const x = index % cols;
  const y = (index - x) / cols;

  return {x, y};
};

export const rootStyle = (cols, current, duration) => {
  const {x, y} = getCoordinates(cols, current);
  const shift = (cols - 1) / 2;

  const transform = current === undefined
    ? `scale(${1 / cols})`
    : `translate(${(shift - x) * 100}%,${(shift - y) * 100}%)`;

  return {
    transform,
    transition: `transform ${duration}ms ease`,
    position: 'absolute',
    width: '100%',
    height: '100%'
  };
};

export const childStyle = (cols, index) => {
  const {x, y} = getCoordinates(cols, index);
  const shift = (cols - 1) / 2;

  return {
    left: (x - shift) * 100 + '%',
    top: (y - shift) * 100 + '%',
    position: 'absolute',
    width: '100%',
    height: '100%'
  }
};

export default {childStyle, rootStyle};
