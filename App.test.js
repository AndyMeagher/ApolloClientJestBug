import React from 'react';
import { render } from "@testing-library/react-native";
import "@testing-library/jest-dom";
import { MockedProvider } from "@apollo/client/testing";
import { Text } from 'react-native';

it("Example Open Handle", async () => {
    render(
      <MockedProvider mocks={[]} addTypename={false}>
        <Text>Example</Text>
      </MockedProvider>
    );
    expect(true).toBe(true);
});
