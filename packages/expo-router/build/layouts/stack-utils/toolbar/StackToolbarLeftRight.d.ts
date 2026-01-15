import { NativeStackNavigationOptions } from '@react-navigation/native-stack';
import React, { type ReactNode } from 'react';
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
export declare const StackToolbarLeft: React.FC<StackToolbarLeftProps>;
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
export declare const StackToolbarRight: React.FC<StackToolbarRightProps>;
export declare function appendStackToolbarLeftPropsToOptions(options: NativeStackNavigationOptions, props: StackToolbarLeftProps): NativeStackNavigationOptions;
export declare function appendStackToolbarRightPropsToOptions(options: NativeStackNavigationOptions, props: StackToolbarRightProps): NativeStackNavigationOptions;
//# sourceMappingURL=StackToolbarLeftRight.d.ts.map