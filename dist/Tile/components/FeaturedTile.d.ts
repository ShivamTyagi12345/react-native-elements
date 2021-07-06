import React from 'react';
import { StyleProp, TextStyle } from 'react-native';
import { RneFunctionComponent } from '../../helpers';
import { TileProps } from '../Tile';
declare const FeaturedTile: RneFunctionComponent<TileProps>;
declare const ThemedFeaturedTile: React.FunctionComponent<Pick<import("react-native").TouchableOpacityProps & import("react-native").TouchableNativeFeedbackProps & {
    title?: string;
    icon?: import("react-native").TouchableHighlightProps & {
        name?: string;
        color?: string;
        size?: number;
        type?: string;
        iconStyle?: StyleProp<TextStyle>;
    } & import("react-native-vector-icons/Icon").IconButtonProps & {
        type?: string;
        Component?: typeof React.Component;
        reverse?: boolean;
        raised?: boolean;
        containerStyle?: StyleProp<import("react-native").ViewStyle>;
        iconProps?: import("react-native-vector-icons/Icon").IconProps;
        reverseColor?: string;
        disabled?: boolean;
        disabledStyle?: StyleProp<import("react-native").ViewStyle>;
        solid?: boolean;
        brand?: boolean;
    };
    caption?: React.ReactNode;
    imageSrc?: string | number | import("react-native").ImageURISource | import("react-native").ImageURISource[];
    activeOpacity?: number;
    containerStyle?: StyleProp<import("react-native").ViewStyle>;
    imageContainerStyle?: StyleProp<import("react-native").ViewStyle>;
    iconContainerStyle?: StyleProp<import("react-native").ViewStyle>;
    overlayContainerStyle?: StyleProp<import("react-native").ViewStyle>;
    titleStyle?: StyleProp<TextStyle>;
    captionStyle?: StyleProp<TextStyle>;
    width?: number;
    height?: number;
    featured?: boolean;
    contentContainerStyle?: StyleProp<import("react-native").ViewStyle>;
    titleNumberOfLines?: number;
    imageProps?: Partial<import("react-native").ImageProps>;
    ImageComponent?: typeof React.Component;
} & Partial<import("../../config").ThemeProps<TileProps>>, "style" | "onLayout" | "testID" | "width" | "height" | "accessible" | "accessibilityActions" | "accessibilityLabel" | "accessibilityRole" | "accessibilityState" | "accessibilityHint" | "accessibilityValue" | "onAccessibilityAction" | "accessibilityLiveRegion" | "importantForAccessibility" | "accessibilityElementsHidden" | "accessibilityViewIsModal" | "onAccessibilityEscape" | "onAccessibilityTap" | "onMagicTap" | "accessibilityIgnoresInvertColors" | "onPress" | "onLongPress" | "ImageComponent" | "containerStyle" | "hitSlop" | "hasTVPreferredFocus" | "tvParallaxProperties" | "activeOpacity" | "delayLongPress" | "delayPressIn" | "delayPressOut" | "disabled" | "onBlur" | "onFocus" | "onPressIn" | "onPressOut" | "pressRetentionOffset" | "touchSoundDisabled" | "caption" | "title" | "icon" | "titleStyle" | "overlayContainerStyle" | "imageProps" | "background" | "useForeground" | "contentContainerStyle" | "iconContainerStyle" | "imageSrc" | "imageContainerStyle" | "captionStyle" | "featured" | "titleNumberOfLines">> | React.ForwardRefExoticComponent<import("react-native").TouchableOpacityProps & import("react-native").TouchableNativeFeedbackProps & {
    title?: string;
    icon?: import("react-native").TouchableHighlightProps & {
        name?: string;
        color?: string;
        size?: number;
        type?: string;
        iconStyle?: StyleProp<TextStyle>;
    } & import("react-native-vector-icons/Icon").IconButtonProps & {
        type?: string;
        Component?: typeof React.Component;
        reverse?: boolean;
        raised?: boolean;
        containerStyle?: StyleProp<import("react-native").ViewStyle>;
        iconProps?: import("react-native-vector-icons/Icon").IconProps;
        reverseColor?: string;
        disabled?: boolean;
        disabledStyle?: StyleProp<import("react-native").ViewStyle>;
        solid?: boolean;
        brand?: boolean;
    };
    caption?: React.ReactNode;
    imageSrc?: string | number | import("react-native").ImageURISource | import("react-native").ImageURISource[];
    activeOpacity?: number;
    containerStyle?: StyleProp<import("react-native").ViewStyle>;
    imageContainerStyle?: StyleProp<import("react-native").ViewStyle>;
    iconContainerStyle?: StyleProp<import("react-native").ViewStyle>;
    overlayContainerStyle?: StyleProp<import("react-native").ViewStyle>;
    titleStyle?: StyleProp<TextStyle>;
    captionStyle?: StyleProp<TextStyle>;
    width?: number;
    height?: number;
    featured?: boolean;
    contentContainerStyle?: StyleProp<import("react-native").ViewStyle>;
    titleNumberOfLines?: number;
    imageProps?: Partial<import("react-native").ImageProps>;
    ImageComponent?: typeof React.Component;
} & Partial<import("../../config").ThemeProps<TileProps>>>;
export { FeaturedTile, ThemedFeaturedTile };