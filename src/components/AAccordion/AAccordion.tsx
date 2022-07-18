import React from 'react';
import {
  View,
  ViewStyle,
  StyleSheet,
  StyleProp,
  TextStyle,
  GestureResponderEvent,
  TouchableOpacity,
} from 'react-native';
// import TouchableRipple from '../TouchableRipple/TouchableRipple';
import {withTheme, useTheme} from '../../core/theming';
import type {Theme} from '../../utils/types';
import {ListAccordionGroupContext} from './AAccordionGroup';
import IconSVG from '../../assets/svgs';
import ATypography from '../ATypography/ATypography';
import {TypographyVariant} from '../ATypography/ATypographyEnum';

type Props = {
  /**
   * Title text for the list accordion.
   */
  title: string;
  /**
   * Callback which returns a React element to display on the left side.
   */
  leftIconName?: any;
  leftIconSize?: number;
  leftIconStyle?: StyleProp<ViewStyle>;
  /**
   * Callback which returns a React element to display on the right side.
   */
  right?: (props: {isExpanded: boolean}) => any;
  /**
   * Whether the accordion is expanded
   * If this prop is provided, the accordion will behave as a "controlled component".
   * You'll need to update this prop when you want to toggle the component or on `onPress`.
   */
  expanded?: boolean;
  /**
   * Function to execute on press.
   */
  onPress?: () => void;
  /**
   * Function to execute on long press.
   */
  onLongPress?: (e: GestureResponderEvent) => void;
  /**
   * Content of the section.
   */
  children: any;
  /**
   * @optional
   */
  theme: Theme;
  /**
   * Style that is passed to the wrapping TouchableRipple element.
   */
  style?: StyleProp<ViewStyle>;
  /**
   * Style that is passed to Title element.
   */
  titleTextStyle?: StyleProp<TextStyle>;

  /**
   * Truncate Title text such that the total number of lines does not
   * exceed this number.
   */
  titleNumberOfLines?: number;
  /**
   * Id is used for distinguishing specific accordion when using List.AccordionGroup. Property is required when using List.AccordionGroup and has no impact on behavior when using standalone List.Accordion.
   */
  id?: string | number;
  /**
   * TestID used for testing purposes
   */
  testID?: string;
  /**
   * Accessibility label for the TouchableRipple. This is read by the screen reader when the user taps the touchable.
   */
  accessibilityLabel?: string;
};

const ListAccordion = ({
  leftIconName,
  leftIconSize,
  leftIconStyle,
  right,
  title,
  children,
  titleTextStyle,
  titleNumberOfLines = 1,
  style,
  id,
  testID,
  onPress,
  onLongPress,
  expanded: expandedProp,
  accessibilityLabel,
}: Props) => {
  const {colors} = useTheme();

  const [expanded, setExpanded] = React.useState<boolean>(
    expandedProp || false,
  );

  const handlePressAction = () => {
    onPress?.();

    if (expandedProp === undefined) {
      // Only update state of the `expanded` prop was not passed
      // If it was passed, the component will act as a controlled component
      // eslint-disable-next-line @typescript-eslint/no-shadow
      setExpanded(expanded => !expanded);
    }
  };

  const expandedInternal = expandedProp !== undefined ? expandedProp : expanded;

  const groupContext = React.useContext(ListAccordionGroupContext);
  if (groupContext !== null && !id) {
    throw new Error(
      'List.Accordion is used inside a List.AccordionGroup without specifying an id prop.',
    );
  }
  const isExpanded = groupContext
    ? groupContext.expandedId === id
    : expandedInternal;
  const handlePress =
    groupContext && id !== undefined
      ? () => groupContext.onAccordionPress(id)
      : handlePressAction;
  return (
    <View>
      <View style={{backgroundColor: colors.background}}>
        <TouchableOpacity
          activeOpacity={1}
          style={[styles.container, style]}
          onPress={handlePress}
          onLongPress={onLongPress}
          accessibilityRole="button"
          accessibilityState={{expanded: isExpanded}}
          accessibilityLabel={accessibilityLabel}
          testID={testID}
          delayPressIn={0}>
          <View style={styles.row} pointerEvents="none">
            {leftIconName ? (
              <View style={[styles.left, leftIconStyle]}>
                <IconSVG
                  name={leftIconName}
                  height={leftIconSize || 24}
                  width={leftIconSize || 24}
                />
              </View>
            ) : null}
            <View style={[styles.content]}>
              <ATypography
                numberOfLines={titleNumberOfLines}
                style={[titleTextStyle]}
                variant={TypographyVariant.PRIMARY_BOLD}>
                {title}
              </ATypography>
            </View>
            <View>
              {right ? (
                right({
                  isExpanded: isExpanded,
                })
              ) : (
                <IconSVG
                  name={isExpanded ? 'uparrow' : 'downarrow'}
                  height={24}
                  width={24}
                />
              )}
            </View>
          </View>
        </TouchableOpacity>
      </View>
      {isExpanded ? <View>{children}</View> : null}
    </View>
  );
};

ListAccordion.displayName = 'List.Accordion';

const styles = StyleSheet.create({
  container: {
    height: 44,
    justifyContent: 'center',
    alignItems: 'center',
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  item: {
    margin: 0,
  },
  child: {
    paddingLeft: 64,
  },
  content: {
    flex: 1,
    justifyContent: 'center',
  },
  left: {
    marginHorizontal: 10,
  },
});

export default withTheme(ListAccordion);
