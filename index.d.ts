import * as React from 'react';
import { ImageSourcePropType, ViewProps } from 'react-native';

declare module 'react-native-photo-zoom' {
	export interface PhotoZoomProgressInfo {
		nativeEvent: {
			loaded: number;
			total: number;
		}
	}

	export interface PhotoZoomTapInfo {
		nativeEvent: {
			point: {
				x: number;
				y: number;
			};
		}
	}

	export interface PhotoZoomScaleInfo {
		nativeEvent: {
			scale: number;
		}
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
		androidScaleType: 'center'|'centerCrop'|"centerInside"| "fitCenter"| "fitStart"| "fitEnd"| "fitXY"| "matrix";
		androidZoomTransitionDuration:number;
	}

	export default class PhotoZoom extends React.Component<PhotoZoomProps>{}
}
