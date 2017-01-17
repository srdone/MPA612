import React from 'react';

export const YouTubeVideo = props => (
  <div className="video-container">
    <label className="video-container__label">{props.title}</label>
    <iframe width={props.width} height={props.height} src={'https://www.youtube.com/embed/' + props.youTubeID} frameBorder="0" allowFullScreen></iframe>
  </div>
);

YouTubeVideo.defaultProps = {
  width: 560,
  height: 315
}