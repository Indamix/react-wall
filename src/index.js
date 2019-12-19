import React, {Children} from 'react';
import {childStyle, rootStyle} from './layout';

export default ({
  cols, current, onSelect, children,
  duration = 300,
  getChildStyle = childStyle,
  getRootStyle = rootStyle,
  overviewClassName = 'overview'
}) => {

  const isOverview = current === undefined;

  const child = (child, index) =>
    <div
      style={getChildStyle(cols, index)}
      onClick={isOverview ? () => onSelect(index) : undefined}
    >
      {child}
    </div>;

  return (
    <div
      style={getRootStyle(cols, current, duration)}
      className={isOverview ? overviewClassName : ''}
    >
      {Children.map(children, child)}
    </div>
  );
};
