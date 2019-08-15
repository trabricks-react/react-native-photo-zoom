//
//  MWTapDetectingImageView.h
//  react-native-photo-zoom
//
//  Created by Suhan Moon on 15/08/2019.
//

#import <UIKit/UIKit.h>
#import <Foundation/Foundation.h>

NS_ASSUME_NONNULL_BEGIN

@protocol MWTapDetectingImageViewDelegate;

@interface MWTapDetectingImageView : UIImageView {}

@property (nonatomic, weak) id <MWTapDetectingImageViewDelegate> tapDelegate;

@end

@protocol MWTapDetectingImageViewDelegate <NSObject>

@optional

- (void)imageView:(UIImageView *)imageView singleTapDetected:(UITouch *)touch;
- (void)imageView:(UIImageView *)imageView doubleTapDetected:(UITouch *)touch;
- (void)imageView:(UIImageView *)imageView tripleTapDetected:(UITouch *)touch;

@end

NS_ASSUME_NONNULL_END
