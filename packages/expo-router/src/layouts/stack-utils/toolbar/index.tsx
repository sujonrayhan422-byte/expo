import { StackToolbarBottom } from './StackToolbarBottom';
import { StackToolbarButton } from './StackToolbarButton';
import { StackToolbarLeft, StackToolbarRight } from './StackToolbarLeftRight';
import { StackToolbarMenu, StackToolbarMenuAction } from './StackToolbarMenu';
import { StackToolbarSearchBarSlot } from './StackToolbarSearchBarSlot';
import { StackToolbarSpacer } from './StackToolbarSpacer';
import { StackToolbarView } from './StackToolbarView';
import {
  StackToolbarBadge,
  StackToolbarIcon,
  StackToolbarLabel,
  type StackToolbarBadgeProps,
  type StackToolbarIconProps,
  type StackToolbarLabelProps,
} from '../common-primitives';

export { StackToolbarBadge, StackToolbarIcon, StackToolbarLabel };
export type { StackToolbarBadgeProps, StackToolbarIconProps, StackToolbarLabelProps };

export const StackToolbar = {
  Left: StackToolbarLeft,
  Right: StackToolbarRight,
  Bottom: StackToolbarBottom,
  Button: StackToolbarButton,
  Menu: StackToolbarMenu,
  MenuAction: StackToolbarMenuAction,
  SearchBarSlot: StackToolbarSearchBarSlot,
  Spacer: StackToolbarSpacer,
  View: StackToolbarView,
  Label: StackToolbarLabel,
  Icon: StackToolbarIcon,
  Badge: StackToolbarBadge,
};

export {
  StackToolbarLeft,
  StackToolbarRight,
  appendStackToolbarLeftPropsToOptions,
  appendStackToolbarRightPropsToOptions,
  type StackToolbarLeftProps,
  type StackToolbarRightProps,
} from './StackToolbarLeftRight';

export { StackToolbarBottom, type StackToolbarBottomProps } from './StackToolbarBottom';

export { StackToolbarButton, type StackToolbarButtonProps } from './StackToolbarButton';

export {
  StackToolbarMenu,
  StackToolbarMenuAction,
  type StackToolbarMenuProps,
  type StackToolbarMenuActionProps,
} from './StackToolbarMenu';

export {
  StackToolbarSearchBarSlot,
  type StackToolbarSearchBarSlotProps,
} from './StackToolbarSearchBarSlot';

export { StackToolbarSpacer, type StackToolbarSpacerProps } from './StackToolbarSpacer';

export { StackToolbarView, type StackToolbarViewProps } from './StackToolbarView';

export type { ToolbarPlacement } from './context';
