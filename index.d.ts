import * as React from 'react';
import { ImageSourcePropType, ViewProps } from 'react-native';

declare module 'react-native-photo-zoom' {
	export interface PhotoZoomProgressInfo {
		loaded: number;
		total: number
	}

	export interface PhotoZoomTapInfo {
		point: {
			x: number;
			y: number;
		};
		target: ImageSourcePropType;
	}

	export interface PhotoZoomScaleInfo {
		scale: number;
		target: ImageSourcePropType;
	}

	export interface PhotoZoomProps extends ViewProps {
		source: ImageSourcePropType;
		loadingIndicatorSource?: ImageSourcePropType;
		fadeDuration?: number;
		minimumZoomScale?: number;
		maximumZoomScale?: number;
		scale?: number;
		onLoadStart?: () => void;
		onLoad?: () => void;
		onLoadEnd?: () => void;
		onProgress?: (progressInfo: PhotoZoomProgressInfo) => void;
		onTap?: (tapInfo: PhotoZoomTapInfo) => void;
		onViewTap?: (tapInfo: PhotoZoomTapInfo) => void;
		onScale?: (scaleInfo: PhotoZoomScaleInfo) => void;
		showHorizontalScrollIndicator?: boolean;
		showVerticalScrollIndicator?: boolean;
	}

	export default class PhotoZoom extends React.Component<PhotoZoomProps>{}
}
