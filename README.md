# react-native-photo-zoom

Provides custom Image view for React Native that allows to perform
pinch-to-zoom on images. Works on both iOS and Android.

This component uses [PhotoDraweeView](https://github.com/ongakuer/PhotoDraweeView) for Android and [MWPhotobrowser](https://github.com/mwaterfall/MWPhotoBrowser) on iOS.

## Usage

```javascript
import PhotoZoom from 'react-native-photo-zoom';
```

Basics:
```javascript
<PhotoZoom
  source={{uri: 'https://facebook.github.io/react/img/logo_og.png'}}
  minimumZoomScale={0.5}
  maximumZoomScale={3}
  androidScaleType="center"
  onLoad={() => console.log("Image loaded!")}
  style={{width: 300, height: 300}} />
```

## Properties

| Property | Type | Description |
|-----------------|----------|--------------------------------------------------------------|
| source | Object | same as source for other React images |
| loadingIndicatorSource | Object | source for loading indicator |
| fadeDuration | int | duration of image fade (in ms) |
| minimumZoomScale | float | The minimum allowed zoom scale. The default value is 1.0 |
| maximumZoomScale | float | The maximum allowed zoom scale. The default value is 3.0 |
| showsHorizontalScrollIndicator | bool | **iOS only**: When true, shows a horizontal scroll indicator. The default value is true. |
| showsVerticalScrollIndicator | bool | **iOS only**: When true, shows a vertical scroll indicator. The default value is true. |
| scale | float | Set zoom scale programmatically |
androidZoomTransitionDuration | int | **Android only**: Double-tap zoom transition duration |
| androidScaleType | String | **Android only**: One of the default *Android* scale types: "center", "centerCrop", "centerInside", "fitCenter", "fitStart", "fitEnd", "fitXY" |
| onLoadStart | func | Callback function |
| onLoad | func | Callback function |
| onLoadEnd | func | Callback function |
| onProgress | func | **iOS only**: Callback function, invoked on download progress with {nativeEvent: {loaded, total}}. |
| onTap | func | Callback function (called on image tap) |
| onViewTap | func | Callback function (called on tap outside of image) |
| onScale | func | Callback function |

## Automatic installation

Just two simple steps:

```console
npm install --save react-native-photo-zoom
```

Link ( RN <= 0.59 )

```console
react-native link react-native-photo-view
```

## Manual installation


### Android
1. Add these lines to `android/settings.gradle`
```
include ':react-native-photo-view'
project(':react-native-photo-view').projectDir = new File(rootProject.projectDir, '../node_modules/react-native-photo-view/android')
```

2. Add one more dependency to `android/app/build.gradle`
```
dependencies {
    compile project(':react-native-photo-view')
}
```

3. Add it to your `MainActivity.java` for RN < 0.29 and to your `MainApplication.java` for RN >=0.29

To register `PhotoViewPackage`, you need to change the `MainActivity` or `MainApplication` depending on React Native version of your app:
```java
import com.reactnative.photoview.PhotoViewPackage;

// ...

public class MainActivity extends ReactActivity {
    // ...

    @Override
    protected List<ReactPackage> getPackages() {
      return Arrays.<ReactPackage>asList(
          new MainReactPackage(),
          new PhotoViewPackage() // add this manager
      );
    }

    // ...
}
```

### IOS
1. Add this line to your podfile
```
  pod 'react-native-photo-view', path: './node_modules/react-native-photo-view'
```

2. Run `pod install`
