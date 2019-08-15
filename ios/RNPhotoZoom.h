#import <UIKit/UIKit.h>
#import <React/RCTComponent.h>
#import "MWTapDetectingImageView.h"
#import "MWTapDetectingView.h"
#import <SDWebImage/SDWebImageManager.h>

@class RCTBridge;

@interface RNPhotoZoom : UIScrollView <UIScrollViewDelegate, MWTapDetectingImageViewDelegate, MWTapDetectingViewDelegate>

#pragma mark - Data

@property (nonatomic, strong) NSDictionary *source;
@property (nonatomic, strong) NSDictionary *src;
@property (nonatomic, strong) NSString *loadingIndicatorSrc;
@property (nonatomic, assign) NSInteger scale;
@property (nonatomic, assign) CGFloat minZoomScale;
@property (nonatomic, assign) CGFloat maxZoomScale;

#pragma mark - Block

@property (nonatomic, copy) RCTDirectEventBlock onPhotoZoomerError;
@property (nonatomic, copy) RCTDirectEventBlock onPhotoZoomerScale;
@property (nonatomic, copy) RCTBubblingEventBlock onPhotoZoomerViewTap;
@property (nonatomic, copy) RCTBubblingEventBlock onPhotoZoomerTap;
@property (nonatomic, copy) RCTDirectEventBlock onPhotoZoomerLoadStart;
@property (nonatomic, copy) RCTDirectEventBlock onPhotoZoomerLoad;
@property (nonatomic, copy) RCTDirectEventBlock onPhotoZoomerLoadEnd;
@property (nonatomic, copy) RCTDirectEventBlock onPhotoZoomerProgress;

- (instancetype)initWithBridge:(RCTBridge *)bridge;

@end
