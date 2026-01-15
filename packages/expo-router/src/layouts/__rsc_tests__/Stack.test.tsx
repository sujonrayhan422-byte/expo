/// <reference types="jest-expo/rsc/expect" />

import React from 'react';

import Stack from '../Stack';

it(`renders to RSC`, async () => {
  const jsx = <Stack.Screen options={{ title: '...' }} />;

  await expect(jsx).toMatchFlightSnapshot();
});

it(`renders Stack.Toolbar to RSC`, async () => {
  const jsx = (
    <>
      <Stack.Toolbar.Left>
        <Stack.Toolbar.Button />
        <Stack.Toolbar.View />
        <Stack.Toolbar.Spacer />
        <Stack.Toolbar.Menu />
      </Stack.Toolbar.Left>
      <Stack.Toolbar.Right>
        <Stack.Toolbar.Button />
      </Stack.Toolbar.Right>
      <Stack.Toolbar.Bottom>
        <Stack.Toolbar.SearchBarSlot />
      </Stack.Toolbar.Bottom>
    </>
  );

  await expect(jsx).toMatchFlightSnapshot();
});
