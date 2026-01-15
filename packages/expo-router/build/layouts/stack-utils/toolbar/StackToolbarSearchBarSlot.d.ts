export interface StackToolbarSearchBarSlotProps {
    /**
     * Whether the search bar slot should be hidden.
     *
     * @default false
     */
    hidden?: boolean;
    /**
     * Whether to hide the shared background.
     *
     * @platform iOS 26+
     */
    hidesSharedBackground?: boolean;
    /**
     * Whether this search bar slot shares background with adjacent items.
     *
     * @platform iOS 26+
     */
    sharesBackground?: boolean;
}
/**
 * A search bar slot for the bottom toolbar. This reserves space for the search bar
 * in the toolbar and allows positioning it among other toolbar items.
 *
 * This component is only available in `Stack.Toolbar.Bottom` placement.
 *
 * @example
 * ```tsx
 * import { Stack } from 'expo-router';
 *
 * export default function Page() {
 *   return (
 *     <>
 *       <Stack.Toolbar.Bottom>
 *         <Stack.Toolbar.Button icon="folder" />
 *         <Stack.Toolbar.SearchBarSlot />
 *         <Stack.Toolbar.Button icon="ellipsis.circle" />
 *       </Stack.Toolbar.Bottom>
 *       <ScreenContent />
 *     </>
 *   );
 * }
 * ```
 *
 * @platform iOS 26+
 */
export declare const StackToolbarSearchBarSlot: React.FC<StackToolbarSearchBarSlotProps>;
//# sourceMappingURL=StackToolbarSearchBarSlot.d.ts.map