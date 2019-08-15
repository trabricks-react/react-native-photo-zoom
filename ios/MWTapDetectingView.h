//
//  MWTapDetectingView.h
//  react-native-photo-zoom
//
//  Created by Suhan Moon on 15/08/2019.
//

#import <UIKit/UIKit.h>
#import <Foundation/Foundation.h>

NS_ASSUME_NONNULL_BEGIN

@protocol MWTapDetectingViewDelegate;

@interface MWTapDetectingView : UIView

@property (nonatomic, weak) id <MWTapDetectingViewDelegate> tapDelegate;

@end

@protocol MWTapDetectingViewDelegate <NSObject>

@optional

- (void)view:(UIView *)view singleTapDetected:(UITouch *)touch;
- (void)view:(UIView *)view doubleTapDetected:(UITouch *)touch;
- (void)view:(UIView *)view tripleTapDetected:(UITouch *)touch;

@end

NS_ASSUME_NONNULL_END
