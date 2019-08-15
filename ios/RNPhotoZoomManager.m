#import "RNPhotoZoomManager.h"
#import "RNPhotoZoom.h"

@implementation RNPhotoZoomManager

RCT_EXPORT_MODULE()

- (UIView *)view {
    return [[RNPhotoZoom alloc] initWithBridge:self.bridge];
}

RCT_REMAP_VIEW_PROPERTY(src, source, NSDictionary)
RCT_EXPORT_VIEW_PROPERTY(loadingIndicatorSrc, NSString)

RCT_REMAP_VIEW_PROPERTY(maximumZoomScale, maxZoomScale, CGFloat)
RCT_REMAP_VIEW_PROPERTY(minimumZoomScale, minZoomScale, CGFloat)

RCT_EXPORT_VIEW_PROPERTY(showsHorizontalScrollIndicator, BOOL)
RCT_EXPORT_VIEW_PROPERTY(showsVerticalScrollIndicator, BOOL)

RCT_EXPORT_VIEW_PROPERTY(onPhotoZoomerError, RCTDirectEventBlock)
RCT_EXPORT_VIEW_PROPERTY(onPhotoZoomerScale, RCTDirectEventBlock)
RCT_EXPORT_VIEW_PROPERTY(onPhotoZoomerViewTap, RCTBubblingEventBlock)
RCT_EXPORT_VIEW_PROPERTY(onPhotoZoomerTap, RCTBubblingEventBlock)
RCT_EXPORT_VIEW_PROPERTY(onPhotoZoomerLoadStart, RCTDirectEventBlock)
RCT_EXPORT_VIEW_PROPERTY(onPhotoZoomerLoad, RCTDirectEventBlock)
RCT_EXPORT_VIEW_PROPERTY(onPhotoZoomerLoadEnd, RCTDirectEventBlock)
RCT_EXPORT_VIEW_PROPERTY(onPhotoZoomerProgress, RCTDirectEventBlock);

@end
