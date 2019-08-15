import { Component } from 'react';
import PropTypes from 'prop-types';
import { requireNativeComponent } from 'react-native';
import ViewPropTypes from 'react-native/Libraries/Components/View/ViewPropTypes';

const resolveAssetSource = require('react-native/Libraries/Image/resolveAssetSource');

export default class PhotoZoom extends Component {
  static propTypes = {
    source: PropTypes.oneOfType([
      PropTypes.shape({
        uri: PropTypes.string
      }),
      // Opaque type returned by require('./image.jpg')
      PropTypes.number
    ]),
    loadingIndicatorSource: PropTypes.oneOfType([
      PropTypes.shape({
        uri: PropTypes.string
      }),
      // Opaque type returned by require('./image.jpg')
      PropTypes.number
    ]),
    fadeDuration: PropTypes.number,
    minimumZoomScale: PropTypes.number,
    maximumZoomScale: PropTypes.number,
    scale: PropTypes.number,
    onLoadStart: PropTypes.func,
    onLoad: PropTypes.func,
    onLoadEnd: PropTypes.func,
    onProgress: PropTypes.func,
    onTap: PropTypes.func,
    onViewTap: PropTypes.func,
    onScale: PropTypes.func,
    showsHorizontalScrollIndicator: PropTypes.bool,
    showsVerticalScrollIndicator: PropTypes.bool,
    ...ViewPropTypes
  };

  render() {
    const source = resolveAssetSource(this.props.source);
    var loadingIndicatorSource = resolveAssetSource(this.props.loadingIndicatorSource);

    if (source && source.uri === '') {
      console.warn('source.uri should not be an empty string');
    }

    if (this.props.src) {
      console.warn('The <PhotoZoom> component requires a `source` property rather than `src`.');
    }

    if (source && source.uri) {
      var { onLoadStart, onLoad, onLoadEnd, onProgress, onTap, onViewTap, onScale, onError, ...props } = this.props;

      var nativeProps = {
        onPhotoZoomerError: onError,
        onPhotoZoomerLoadStart: onLoadStart,
        onPhotoZoomerLoad: onLoad,
        onPhotoZoomerLoadEnd: onLoadEnd,
        onPhotoZoomerProgress: onProgress,
        onPhotoZoomerTap: onTap,
        onPhotoZoomerViewTap: onViewTap,
        onPhotoZoomerScale: onScale,
        ...props,
        src: source,
        loadingIndicatorSrc: loadingIndicatorSource ? loadingIndicatorSource.uri : null,
      };

      return (
        <RNPhotoZoom {...nativeProps} />
      );
    }

    return null
  }
}

var cfg = {
  nativeOnly: {
    onPhotoZoomerError: true,
    onPhotoZoomerLoadStart: true,
    onPhotoZoomerLoad: true,
    onPhotoZoomerLoadEnd: true,
    onPhotoZoomerProgress: true,
    onPhotoZoomerTap: true,
    onPhotoZoomerViewTap: true,
    onPhotoZoomerScale: true,
    src: true,
    loadingIndicatorSrc: true
  }
};

const RNPhotoZoom = requireNativeComponent('RNPhotoZoom', PhotoZoom, cfg);
