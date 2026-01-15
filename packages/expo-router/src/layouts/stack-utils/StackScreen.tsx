'use client';
import { NativeStackNavigationOptions } from '@react-navigation/native-stack';
import { Children, isValidElement, useMemo, type PropsWithChildren, type ReactNode } from 'react';

import {
  StackHeaderComponent,
  appendStackHeaderPropsToOptions,
  type StackHeaderProps,
} from './StackHeaderComponent';
import {
  StackScreenTitle,
  appendStackScreenTitlePropsToOptions,
  type StackScreenTitleProps,
  StackScreenBackButton,
  appendStackScreenBackButtonPropsToOptions,
  type StackScreenBackButtonProps,
} from './screen';
import {
  StackToolbarLeft,
  appendStackToolbarLeftPropsToOptions,
  type StackToolbarLeftProps,
  StackToolbarRight,
  appendStackToolbarRightPropsToOptions,
  type StackToolbarRightProps,
  StackToolbarBottom,
} from './toolbar';
import { Screen } from '../../views/Screen';

export interface StackScreenProps extends PropsWithChildren {
  name?: string;
  options?: NativeStackNavigationOptions;
}

function extractBottomToolbars(
  children: ReactNode
): React.ReactElement<typeof StackToolbarBottom>[] {
  return (
    Children.map(children, (child) => {
      if (isValidElement(child) && child.type === StackToolbarBottom) {
        return child as React.ReactElement<typeof StackToolbarBottom>;
      }
      return null;
    })?.filter((child) => child !== null) ?? []
  );
}

export function StackScreen({ children, options, ...rest }: StackScreenProps) {
  // This component will only render when used inside a page.
  const updatedOptions = useMemo(
    () =>
      appendScreenStackPropsToOptions(options ?? {}, {
        children,
      }),
    [options, children]
  );

  const bottomToolbars = useMemo(() => extractBottomToolbars(children), [children]);

  return (
    <>
      <Screen {...rest} options={updatedOptions} />
      {/* Bottom toolbar is a native component rendered separately */}
      {bottomToolbars}
    </>
  );
}

StackScreen.Title = StackScreenTitle;
StackScreen.BackButton = StackScreenBackButton;

export function appendScreenStackPropsToOptions(
  options: NativeStackNavigationOptions,
  props: StackScreenProps
): NativeStackNavigationOptions {
  let updatedOptions = { ...options, ...props.options };

  function appendChildOptions(child: React.ReactElement, opts: NativeStackNavigationOptions) {
    if (child.type === StackHeaderComponent) {
      return appendStackHeaderPropsToOptions(opts, child.props as StackHeaderProps);
    }

    if (child.type === StackScreenTitle) {
      return appendStackScreenTitlePropsToOptions(opts, child.props as StackScreenTitleProps);
    }

    if (child.type === StackScreenBackButton) {
      return appendStackScreenBackButtonPropsToOptions(
        opts,
        child.props as StackScreenBackButtonProps
      );
    }

    if (child.type === StackToolbarLeft) {
      return appendStackToolbarLeftPropsToOptions(opts, child.props as StackToolbarLeftProps);
    }

    if (child.type === StackToolbarRight) {
      return appendStackToolbarRightPropsToOptions(opts, child.props as StackToolbarRightProps);
    }

    if (child.type === StackToolbarBottom) {
      throw new Error(
        `Stack.Toolbar.Bottom cannot be used inside Stack.Screen in _layout.tsx. Please move it to the page component.`
      );
    }

    const typeName =
      typeof child.type === 'function'
        ? (child.type as { name?: string }).name || 'Unknown'
        : String(child.type);
    console.warn(`Unknown child element passed to Stack.Screen: ${typeName}`);
    return opts;
  }

  Children.forEach(props.children, (child) => {
    if (isValidElement(child)) {
      updatedOptions = appendChildOptions(child, updatedOptions);
    }
  });

  return updatedOptions;
}
