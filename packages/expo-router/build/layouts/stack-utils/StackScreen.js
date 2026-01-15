"use strict";
'use client';
Object.defineProperty(exports, "__esModule", { value: true });
exports.StackScreen = StackScreen;
exports.appendScreenStackPropsToOptions = appendScreenStackPropsToOptions;
const react_1 = require("react");
const StackHeaderComponent_1 = require("./StackHeaderComponent");
const screen_1 = require("./screen");
const toolbar_1 = require("./toolbar");
const Screen_1 = require("../../views/Screen");
function extractBottomToolbars(children) {
    return (react_1.Children.map(children, (child) => {
        if ((0, react_1.isValidElement)(child) && child.type === toolbar_1.StackToolbarBottom) {
            return child;
        }
        return null;
    })?.filter((child) => child !== null) ?? []);
}
function StackScreen({ children, options, ...rest }) {
    // This component will only render when used inside a page.
    const updatedOptions = (0, react_1.useMemo)(() => appendScreenStackPropsToOptions(options ?? {}, {
        children,
    }), [options, children]);
    const bottomToolbars = (0, react_1.useMemo)(() => extractBottomToolbars(children), [children]);
    return (<>
      <Screen_1.Screen {...rest} options={updatedOptions}/>
      {/* Bottom toolbar is a native component rendered separately */}
      {bottomToolbars}
    </>);
}
StackScreen.Title = screen_1.StackScreenTitle;
StackScreen.BackButton = screen_1.StackScreenBackButton;
function appendScreenStackPropsToOptions(options, props) {
    let updatedOptions = { ...options, ...props.options };
    function appendChildOptions(child, opts) {
        if (child.type === StackHeaderComponent_1.StackHeaderComponent) {
            return (0, StackHeaderComponent_1.appendStackHeaderPropsToOptions)(opts, child.props);
        }
        if (child.type === screen_1.StackScreenTitle) {
            return (0, screen_1.appendStackScreenTitlePropsToOptions)(opts, child.props);
        }
        if (child.type === screen_1.StackScreenBackButton) {
            return (0, screen_1.appendStackScreenBackButtonPropsToOptions)(opts, child.props);
        }
        if (child.type === toolbar_1.StackToolbarLeft) {
            return (0, toolbar_1.appendStackToolbarLeftPropsToOptions)(opts, child.props);
        }
        if (child.type === toolbar_1.StackToolbarRight) {
            return (0, toolbar_1.appendStackToolbarRightPropsToOptions)(opts, child.props);
        }
        if (child.type === toolbar_1.StackToolbarBottom) {
            throw new Error(`Stack.Toolbar.Bottom cannot be used inside Stack.Screen in _layout.tsx. Please move it to the page component.`);
        }
        const typeName = typeof child.type === 'function'
            ? child.type.name || 'Unknown'
            : String(child.type);
        console.warn(`Unknown child element passed to Stack.Screen: ${typeName}`);
        return opts;
    }
    react_1.Children.forEach(props.children, (child) => {
        if ((0, react_1.isValidElement)(child)) {
            updatedOptions = appendChildOptions(child, updatedOptions);
        }
    });
    return updatedOptions;
}
//# sourceMappingURL=StackScreen.js.map