'use client';
import type { ReactNode } from 'react';

import { ToolbarPlacementContext, useToolbarPlacement } from './context';
import { NativeMenuContext } from '../../../link/NativeMenuContext';
import { RouterToolbarHost } from '../../../toolbar/native';

export interface StackToolbarBottomProps {
  /**
   * Child elements to compose the bottom toolbar. Can include Stack.Toolbar.Button,
   * Stack.Toolbar.Menu, Stack.Toolbar.Spacer, Stack.Toolbar.View, and
   * Stack.Toolbar.SearchBarPreferredSlot components.
   */
  children?: ReactNode;
}

/**
 * The component used to configure the bottom toolbar on iOS.
 *
 * When used inside a screen, it allows you to show a bottom toolbar.
 *
 * > **Note**: Stack.Toolbar.Bottom is an experimental API and may change without notice. Stack.Toolbar.Bottom can only be used inside **page** components, not in layout components.
 *
 * @example
 * ```tsx
 * import { Stack } from 'expo-router';
 *
 * export default function Page() {
 *   return (
 *     <>
 *       <Stack.Toolbar.Bottom>
 *         <Stack.Toolbar.Spacer />
 *         <Stack.Toolbar.Button icon="magnifyingglass" onPress={() => {}} />
 *         <Stack.Toolbar.Spacer />
 *       </Stack.Toolbar.Bottom>
 *       <ScreenContent />
 *     </>
 *   );
 * }
 * ```
 *
 * @platform ios
 */
export const StackToolbarBottom: React.FC<StackToolbarBottomProps> = ({ children }) => {
  const parentPlacement = useToolbarPlacement();
  if (parentPlacement) {
    throw new Error(
      `Stack.Toolbar.Bottom cannot be nested inside Stack.Toolbar.${parentPlacement.charAt(0).toUpperCase() + parentPlacement.slice(1)}.`
    );
  }

  return (
    <ToolbarPlacementContext.Provider value="bottom">
      <NativeMenuContext value>
        <RouterToolbarHost>{children}</RouterToolbarHost>
      </NativeMenuContext>
    </ToolbarPlacementContext.Provider>
  );
};
