"use strict";
'use client';
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.StackToolbarRight = exports.StackToolbarLeft = void 0;
exports.appendStackToolbarLeftPropsToOptions = appendStackToolbarLeftPropsToOptions;
exports.appendStackToolbarRightPropsToOptions = appendStackToolbarRightPropsToOptions;
const react_1 = __importStar(require("react"));
const react_2 = require("react");
const StackToolbarButton_1 = require("./StackToolbarButton");
const StackToolbarMenu_1 = require("./StackToolbarMenu");
const StackToolbarSpacer_1 = require("./StackToolbarSpacer");
const StackToolbarView_1 = require("./StackToolbarView");
const context_1 = require("./context");
const children_1 = require("../../../utils/children");
const Screen_1 = require("../../../views/Screen");
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
const StackToolbarLeft = (props) => {
    const parentPlacement = (0, context_1.useToolbarPlacement)();
    if (parentPlacement) {
        throw new Error(`Stack.Toolbar.Left cannot be nested inside Stack.Toolbar.${parentPlacement.charAt(0).toUpperCase() + parentPlacement.slice(1)}. Toolbars must be placed at the top level of a screen.`);
    }
    // This component will only render when used inside a page
    const updatedOptions = (0, react_2.useMemo)(() => appendStackToolbarLeftPropsToOptions({}, props), [props]);
    return (<context_1.ToolbarPlacementContext.Provider value="left">
      <Screen_1.Screen options={updatedOptions}/>
    </context_1.ToolbarPlacementContext.Provider>);
};
exports.StackToolbarLeft = StackToolbarLeft;
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
const StackToolbarRight = (props) => {
    const parentPlacement = (0, context_1.useToolbarPlacement)();
    if (parentPlacement) {
        throw new Error(`Stack.Toolbar.Right cannot be nested inside Stack.Toolbar.${parentPlacement.charAt(0).toUpperCase() + parentPlacement.slice(1)}. Toolbars must be placed at the top level of a screen.`);
    }
    // This component will only render when used inside a page
    const updatedOptions = (0, react_2.useMemo)(() => appendStackToolbarRightPropsToOptions({}, props), [props]);
    return (<context_1.ToolbarPlacementContext.Provider value="right">
      <Screen_1.Screen options={updatedOptions}/>
    </context_1.ToolbarPlacementContext.Provider>);
};
exports.StackToolbarRight = StackToolbarRight;
function convertToolbarChildrenToUnstableItems(children, side) {
    const allChildren = react_1.default.Children.toArray(children);
    const actions = allChildren.filter((child) => (0, children_1.isChildOfType)(child, StackToolbarButton_1.StackToolbarButton) ||
        (0, children_1.isChildOfType)(child, StackToolbarMenu_1.StackToolbarMenu) ||
        (0, children_1.isChildOfType)(child, StackToolbarSpacer_1.StackToolbarSpacer) ||
        (0, children_1.isChildOfType)(child, StackToolbarView_1.StackToolbarView));
    if (actions.length !== allChildren.length && process.env.NODE_ENV !== 'production') {
        const otherElements = allChildren
            .filter((child) => !actions.some((action) => action === child))
            .map((e) => {
            if ((0, react_1.isValidElement)(e)) {
                if (e.type === react_1.Fragment) {
                    return '<Fragment>';
                }
                else {
                    return e.type?.name ?? e.type;
                }
            }
            return String(e);
        });
        console.warn(`Stack.Toolbar.${side} only accepts <Stack.Toolbar.Button>, <Stack.Toolbar.Menu>, <Stack.Toolbar.View>, and <Stack.Toolbar.Spacer> as children. Found invalid children: ${otherElements.join(', ')}`);
    }
    return () => actions
        .map((action) => {
        if ((0, children_1.isChildOfType)(action, StackToolbarButton_1.StackToolbarButton)) {
            return (0, StackToolbarButton_1.convertStackToolbarButtonPropsToRNHeaderItem)(action.props);
        }
        else if ((0, children_1.isChildOfType)(action, StackToolbarMenu_1.StackToolbarMenu)) {
            return (0, StackToolbarMenu_1.convertStackToolbarMenuPropsToRNHeaderItem)(action.props);
        }
        else if ((0, children_1.isChildOfType)(action, StackToolbarSpacer_1.StackToolbarSpacer)) {
            return (0, StackToolbarSpacer_1.convertStackToolbarSpacerPropsToRNHeaderItem)(action.props);
        }
        return (0, StackToolbarView_1.convertStackToolbarViewPropsToRNHeaderItem)(action.props);
    })
        .filter((item) => !!item);
}
function appendStackToolbarLeftPropsToOptions(options, props) {
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
function appendStackToolbarRightPropsToOptions(options, props) {
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
//# sourceMappingURL=StackToolbarLeftRight.js.map