
import React from 'react'
import QeeqIcon, { QeeqIconProps } from '../IconWrap';

const DeleteSvg = {"icon":{"tag":"svg","attrs":{"data-name":"图层 1","viewBox":"0 0 164.65 174.63"},"children":[{"tag":"path","attrs":{"d":"M177.33 41.79H22.67a5 5 0 0 1 0-10h154.66a5 5 0 0 1 0 10zm-49.89-20H72.56a5 5 0 1 1 0-10h54.88a5 5 0 1 1 0 10zM77.55 151.55V66.74a5 5 0 1 1 10 0v84.82a5 5 0 1 1-10 0zm34.92 0V66.74a5 5 0 1 1 10 0v84.82a5 5 0 1 1-10 0zM42.62 56.76a5 5 0 0 1 5 5v104.76a10 10 0 0 0 10 10h84.82a10 10 0 0 0 10-10V61.75a5 5 0 0 1 10 0v109.76a15 15 0 0 1-15 15H52.6a15 15 0 0 1-15-15V61.75a5 5 0 0 1 5-5z","transform":"translate(-17.68 -11.85)"}}]},"name":"delete"};

const Delete = (
  props,
  ref
) => <QeeqIcon {...props} ref={ref} icon={DeleteSvg} />;

Delete.displayName = 'Delete';
export default React.forwardRef(Delete);
