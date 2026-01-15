"use strict";
'use client';
Object.defineProperty(exports, "__esModule", { value: true });
exports.StackToolbarBottom = void 0;
const context_1 = require("./context");
const NativeMenuContext_1 = require("../../../link/NativeMenuContext");
const native_1 = require("../../../toolbar/native");
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
const StackToolbarBottom = ({ children }) => {
    const parentPlacement = (0, context_1.useToolbarPlacement)();
    if (parentPlacement) {
        throw new Error(`Stack.Toolbar.Bottom cannot be nested inside Stack.Toolbar.${parentPlacement.charAt(0).toUpperCase() + parentPlacement.slice(1)}.`);
    }
    return (<context_1.ToolbarPlacementContext.Provider value="bottom">
      <NativeMenuContext_1.NativeMenuContext value>
        <native_1.RouterToolbarHost>{children}</native_1.RouterToolbarHost>
      </NativeMenuContext_1.NativeMenuContext>
    </context_1.ToolbarPlacementContext.Provider>);
};
exports.StackToolbarBottom = StackToolbarBottom;
//# sourceMappingURL=StackToolbarBottom.js.map