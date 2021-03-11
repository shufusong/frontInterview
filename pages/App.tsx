import React, { useRef, useEffect, useState, useCallback } from "react";
import { PictureSelect } from "./PictureSelect";

const pictures = [
  {
    id: "1",
    name: "foo",
    url:
      "https://gw.alipayobjects.com/mdn/rms_d212b7/afts/img/A*LlfeSa8N0WgAAAAAAAAAAABkARQnAQ",
  },
  {
    id: "2",
    name: "foo",
    url:
      "https://gw.alipayobjects.com/mdn/rms_d212b7/afts/img/A*LlfeSa8N0WgAAAAAAAAAAABkARQnAQ",
  },
  {
    id: "3",
    name: "foo",
    url:
      "https://gw.alipayobjects.com/mdn/rms_d212b7/afts/img/A*LlfeSa8N0WgAAAAAAAAAAABkARQnAQ",
  },
];
const { Fragment } = React;
export default () => {
  const [value, setValue] = React.useState([]);
  return (
    <Fragment>
      <PictureSelect pictures={pictures} value={value} setValue={setValue} />
      <div>你已经选择了: {value.join(',')}</div>
    </Fragment>
  );
};
