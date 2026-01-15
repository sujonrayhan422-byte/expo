import type { ReactNode } from 'react';
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
export declare const StackToolbarBottom: React.FC<StackToolbarBottomProps>;
//# sourceMappingURL=StackToolbarBottom.d.ts.map