import React, { useRef, useEffect, useState, useCallback } from "react";
import Styles from './index.less'

interface picturesType {
  id: string;
  name: string;
  url: string;
}

interface PictureSelectProps {
  pictures: picturesType[];
}
const { Fragment } = React;
export const PictureSelect: React.FC<PictureSelectProps> = (props) => {
  const { pictures } = props;
  return (
    <Fragment>
      {pictures.map((item: picturesType) => (
        <span className={Styles.imageMargin}>
          <span className={Styles.noCheck}></span>
          <img src={item.url} />
        </span>
      ))}
    </Fragment>
  );
};
