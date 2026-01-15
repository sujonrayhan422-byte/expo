'use client';
import { NativeStackNavigationOptions } from '@react-navigation/native-stack';
import React, { Fragment, isValidElement, type ReactNode } from 'react';
import { useMemo } from 'react';

import {
  convertStackToolbarButtonPropsToRNHeaderItem,
  StackToolbarButton,
} from './StackToolbarButton';
import { convertStackToolbarMenuPropsToRNHeaderItem, StackToolbarMenu } from './StackToolbarMenu';
import {
  convertStackToolbarSpacerPropsToRNHeaderItem,
  StackToolbarSpacer,
} from './StackToolbarSpacer';
import { convertStackToolbarViewPropsToRNHeaderItem, StackToolbarView } from './StackToolbarView';
import { ToolbarPlacementContext, useToolbarPlacement } from './context';
import { isChildOfType } from '../../../utils/children';
import { Screen } from '../../../views/Screen';

export interface StackToolbarLeftProps {
  /**
   * Child elements to compose the left area of the header. Can include Stack.Toolbar.Button,
   * Stack.Toolbar.Menu, Stack.Toolbar.View, and Stack.Toolbar.Spacer components.
   */
  children?: ReactNode;
  /**
   * When `true`, renders children as a custom component in the header left area,
   * replacing the default header left layout.
   *
   * @default false
   */
  asChild?: boolean;
}

export interface StackToolbarRightProps {
  /**
   * Child elements to compose the right area of the header. Can include Stack.Toolbar.Button,
   * Stack.Toolbar.Menu, Stack.Toolbar.View, and Stack.Toolbar.Spacer components.
   */
  children?: ReactNode;
  /**
   * When `true`, renders children as a custom component in the header right area,
   * replacing the default header right layout.
   *
   * @default false
   */
  asChild?: boolean;
}

/**
 * The component used to configure the left area of the stack header toolbar.
 *
 * When used inside a screen, it allows you to customize the left side of the header dynamically.
 *
 * > **Note:** Using `Stack.Toolbar.Left` will automatically make the header visible
 * (`headerShown: true`), as the toolbar is rendered as part of the native header.
 *
 * > **Note**: Stack.Toolbar.Left is an experimental API and may change without notice.
 *
 * @example
 * ```tsx
 * import { Stack } from 'expo-router';
 *
 * export default function Layout() {
 *   return (
 *     <Stack>
 *       <Stack.Screen name="index">
 *         <Stack.Toolbar.Left>
 *           <Stack.Toolbar.Button icon="sidebar.left" onPress={() => alert('Left button pressed!')} />
 *         </Stack.Toolbar.Left>
 *       </Stack.Screen>
 *     </Stack>
 *   );
 * }
 * ```
 *
 * @example
 * ```tsx
 * import { Stack } from 'expo-router';
 *
 * export default function Page() {
 *   return (
 *     <>
 *       <Stack.Toolbar.Left>
 *         <Stack.Toolbar.Button icon="sidebar.left" onPress={() => alert('Left button pressed!')} />
 *       </Stack.Toolbar.Left>
 *       <ScreenContent />
 *     </>
 *   );
 * }
 * ```
 */
export const StackToolbarLeft: React.FC<StackToolbarLeftProps> = (props) => {
  const parentPlacement = useToolbarPlacement();
  if (parentPlacement) {
    throw new Error(
      `Stack.Toolbar.Left cannot be nested inside Stack.Toolbar.${parentPlacement.charAt(0).toUpperCase() + parentPlacement.slice(1)}. Toolbars must be placed at the top level of a screen.`
    );
  }

  // This component will only render when used inside a page
  const updatedOptions = useMemo(() => appendStackToolbarLeftPropsToOptions({}, props), [props]);
  return (
    <ToolbarPlacementContext.Provider value="left">
      <Screen options={updatedOptions} />
    </ToolbarPlacementContext.Provider>
  );
};

/**
 * The component used to configure the right area of the stack header toolbar.
 *
 * When used inside a screen, it allows you to customize the right side of the header dynamically.
 *
 * > **Note:** Using `Stack.Toolbar.Right` will automatically make the header visible
 * (`headerShown: true`), as the toolbar is rendered as part of the native header.
 *
 * > **Note**: Stack.Toolbar.Right is an experimental API and may change without notice.
 *
 * @example
 * ```tsx
 * import { Stack } from 'expo-router';
 *
 * export default function Layout() {
 *   return (
 *     <Stack>
 *       <Stack.Screen name="index">
 *         <Stack.Toolbar.Right>
 *           <Stack.Toolbar.Button icon="ellipsis.circle" onPress={() => alert('Right button pressed!')} />
 *         </Stack.Toolbar.Right>
 *       </Stack.Screen>
 *     </Stack>
 *   );
 * }
 * ```
 *
 * @example
 * ```tsx
 * import { Stack } from 'expo-router';
 *
 * export default function Page() {
 *   return (
 *     <>
 *       <Stack.Toolbar.Right>
 *         <Stack.Toolbar.Button icon="ellipsis.circle" onPress={() => alert('Right button pressed!')} />
 *       </Stack.Toolbar.Right>
 *       <ScreenContent />
 *     </>
 *   );
 * }
 * ```
 */
export const StackToolbarRight: React.FC<StackToolbarRightProps> = (props) => {
  const parentPlacement = useToolbarPlacement();
  if (parentPlacement) {
    throw new Error(
      `Stack.Toolbar.Right cannot be nested inside Stack.Toolbar.${parentPlacement.charAt(0).toUpperCase() + parentPlacement.slice(1)}. Toolbars must be placed at the top level of a screen.`
    );
  }

  // This component will only render when used inside a page
  const updatedOptions = useMemo(() => appendStackToolbarRightPropsToOptions({}, props), [props]);
  return (
    <ToolbarPlacementContext.Provider value="right">
      <Screen options={updatedOptions} />
    </ToolbarPlacementContext.Provider>
  );
};

function convertToolbarChildrenToUnstableItems(
  children: React.ReactNode,
  side: 'Left' | 'Right'
):
  | NativeStackNavigationOptions['unstable_headerRightItems']
  | NativeStackNavigationOptions['unstable_headerLeftItems'] {
  const allChildren = React.Children.toArray(children);
  const actions = allChildren.filter(
    (child) =>
      isChildOfType(child, StackToolbarButton) ||
      isChildOfType(child, StackToolbarMenu) ||
      isChildOfType(child, StackToolbarSpacer) ||
      isChildOfType(child, StackToolbarView)
  );
  if (actions.length !== allChildren.length && process.env.NODE_ENV !== 'production') {
    const otherElements = allChildren
      .filter((child) => !actions.some((action) => action === child))
      .map((e) => {
        if (isValidElement(e)) {
          if (e.type === Fragment) {
            return '<Fragment>';
          } else {
            return (e.type as { name: string })?.name ?? e.type;
          }
        }

        return String(e);
      });
    console.warn(
      `Stack.Toolbar.${side} only accepts <Stack.Toolbar.Button>, <Stack.Toolbar.Menu>, <Stack.Toolbar.View>, and <Stack.Toolbar.Spacer> as children. Found invalid children: ${otherElements.join(', ')}`
    );
  }
  return () =>
    actions
      .map((action) => {
        if (isChildOfType(action, StackToolbarButton)) {
          return convertStackToolbarButtonPropsToRNHeaderItem(action.props);
        } else if (isChildOfType(action, StackToolbarMenu)) {
          return convertStackToolbarMenuPropsToRNHeaderItem(action.props);
        } else if (isChildOfType(action, StackToolbarSpacer)) {
          return convertStackToolbarSpacerPropsToRNHeaderItem(action.props);
        }
        return convertStackToolbarViewPropsToRNHeaderItem(action.props);
      })
      .filter((item) => !!item);
}

export function appendStackToolbarLeftPropsToOptions(
  options: NativeStackNavigationOptions,
  props: StackToolbarLeftProps
): NativeStackNavigationOptions {
  if (props.asChild) {
    return {
      ...options,
      headerShown: true,
      headerLeft: () => props.children,
    };
  }

  return {
    ...options,
    headerShown: true,
    unstable_headerLeftItems: convertToolbarChildrenToUnstableItems(props.children, 'Left'),
  };
}

export function appendStackToolbarRightPropsToOptions(
  options: NativeStackNavigationOptions,
  props: StackToolbarRightProps
): NativeStackNavigationOptions {
  if (props.asChild) {
    return {
      ...options,
      headerShown: true,
      headerRight: () => props.children,
    };
  }

  return {
    ...options,
    headerShown: true,
    unstable_headerRightItems: convertToolbarChildrenToUnstableItems(props.children, 'Right'),
  };
}
