/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import PhotoZoom from "react-native-photo-zoom";

class App extends React.Component {

  render() {
    return (
      <PhotoZoom
        source={{ uri: 'https://previews.123rf.com/images/bogumil/bogumil1301/bogumil130100007/17101750-%ED%91%B8%EB%A5%B8-%ED%95%98%EB%8A%98%EC%97%90-narew-%EA%B0%95-%E2%80%8B%E2%80%8B%EA%B5%AC%EB%A6%84%EA%B3%BC-%EC%97%AC%EB%A6%84-%ED%92%8D%EA%B2%BD.jpg' }}
        minimumZoomScale={0.5}
        maximumZoomScale={3}
        androidScaleType="center"
        onLoad={() => console.log("Image loaded!")}
        style={{ width: "100%", height: "100%" }}
      />
    );
  }
}

export default App;
