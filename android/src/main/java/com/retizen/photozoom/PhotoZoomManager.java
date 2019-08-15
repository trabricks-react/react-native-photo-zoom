package com.retizen.photozoom;

import android.widget.ImageView.ScaleType;
import com.facebook.drawee.backends.pipeline.Fresco;
import com.facebook.drawee.backends.pipeline.PipelineDraweeControllerBuilder;
import com.facebook.drawee.drawable.ScalingUtils;
import com.facebook.drawee.generic.GenericDraweeHierarchy;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReadableMap;
import com.facebook.react.common.MapBuilder;
import com.facebook.react.uimanager.SimpleViewManager;
import com.facebook.react.uimanager.ThemedReactContext;
import com.facebook.react.uimanager.annotations.ReactProp;

import javax.annotation.Nullable;
import java.util.Map;

/**
 * @author alwx (https://github.com/alwx)
 * @version 1.0
 */
public class PhotoZoomManager extends SimpleViewManager<PhotoZoom> {
    private static final String REACT_CLASS = "PhotoZoomAndroid";

    private ResourceDrawableIdHelper mResourceDrawableIdHelper;

    PhotoZoomManager(ReactApplicationContext context) {
        mResourceDrawableIdHelper = new ResourceDrawableIdHelper();
    }

    @Override
    public String getName() {
        return REACT_CLASS;
    }

    @Override
    protected PhotoZoom createViewInstance(ThemedReactContext reactContext) {
        return new PhotoZoom(reactContext);
    }

    @ReactProp(name = "src")
    public void setSource(PhotoZoom view, @Nullable ReadableMap source) {
        view.setSource(source, mResourceDrawableIdHelper);
    }

    @ReactProp(name = "loadingIndicatorSrc")
    public void setLoadingIndicatorSource(PhotoZoom view, @Nullable String source) {
        view.setLoadingIndicatorSource(source, mResourceDrawableIdHelper);
    }

    @ReactProp(name = "fadeDuration")
    public void setFadeDuration(PhotoZoom view, int durationMs) {
        view.setFadeDuration(durationMs);
    }

    @ReactProp(name = "shouldNotifyLoadEvents")
    public void setLoadHandlersRegistered(PhotoZoom view, boolean shouldNotifyLoadEvents) {
        view.setShouldNotifyLoadEvents(shouldNotifyLoadEvents);
    }

    @ReactProp(name = "minimumZoomScale")
    public void setMinimumZoomScale(PhotoZoom view, float minimumZoomScale) {
        view.setMinimumScale(minimumZoomScale);
    }

    @ReactProp(name = "maximumZoomScale")
    public void setMaximumZoomScale(PhotoZoom view, float maximumZoomScale) {
        view.setMaximumScale(maximumZoomScale);
    }

    @ReactProp(name = "scale")
    public void setScale(PhotoZoom view, float scale) {
        view.setScale(scale, true);
    }

    @ReactProp(name = "androidZoomTransitionDuration")
    public void setScale(PhotoZoom view, int durationMs) {
        view.setZoomTransitionDuration(durationMs);
    }

    @ReactProp(name = "androidScaleType")
    public void setScaleType(PhotoZoom view, String scaleType) {
        ScalingUtils.ScaleType value = ScalingUtils.ScaleType.CENTER;

        switch (scaleType) {
            case "center":
                value = ScalingUtils.ScaleType.CENTER;
                break;
            case "centerCrop":
                value = ScalingUtils.ScaleType.CENTER_CROP;
                break;
            case "centerInside":
                value = ScalingUtils.ScaleType.CENTER_INSIDE;
                break;
            case "fitCenter":
                value = ScalingUtils.ScaleType.FIT_CENTER;
                break;
            case "fitStart":
                value = ScalingUtils.ScaleType.FIT_START;
                break;
            case "fitEnd":
                value = ScalingUtils.ScaleType.FIT_END;
                break;
            case "fitXY":
                value = ScalingUtils.ScaleType.FIT_XY;
                break;
        }
        GenericDraweeHierarchy hierarchy = view.getHierarchy();
        hierarchy.setActualImageScaleType(value);
    }

    @Override
    public @Nullable
    Map getExportedCustomDirectEventTypeConstants() {
        return MapBuilder.of(
                ImageEvent.eventNameForType(ImageEvent.ON_ERROR), MapBuilder.of("registrationName", "onPhotoZoomerError"),
                ImageEvent.eventNameForType(ImageEvent.ON_LOAD_START), MapBuilder.of("registrationName", "onPhotoZoomerLoadStart"),
                ImageEvent.eventNameForType(ImageEvent.ON_LOAD), MapBuilder.of("registrationName", "onPhotoZoomerLoad"),
                ImageEvent.eventNameForType(ImageEvent.ON_LOAD_END), MapBuilder.of("registrationName", "onPhotoZoomerLoadEnd"),
                ImageEvent.eventNameForType(ImageEvent.ON_TAP), MapBuilder.of("registrationName", "onPhotoZoomerTap"),
                ImageEvent.eventNameForType(ImageEvent.ON_VIEW_TAP), MapBuilder.of("registrationName", "onPhotoZoomerViewTap"),
                ImageEvent.eventNameForType(ImageEvent.ON_SCALE), MapBuilder.of("registrationName", "onPhotoZoomerScale")
        );
    }

    @Override
    protected void onAfterUpdateTransaction(PhotoZoom view) {
        super.onAfterUpdateTransaction(view);
        view.maybeUpdateView(Fresco.newDraweeControllerBuilder());
    }
}
