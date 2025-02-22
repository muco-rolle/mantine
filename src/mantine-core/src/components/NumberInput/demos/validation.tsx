import React from 'react';
import { NumberInput } from '../NumberInput';

const code = `
// Error as boolean – red border color
<NumberInput error />

// Error as React node – red border color and message below input
<NumberInput error="You must be at least 21" />
`;

function Demo() {
  return (
    <div style={{ maxWidth: 320, marginLeft: 'auto', marginRight: 'auto' }}>
      <NumberInput label="Your age" defaultValue={20} error />
      <NumberInput
        style={{ marginTop: 15 }}
        defaultValue={20}
        label="Your age"
        error="You must be at least 21"
      />
    </div>
  );
}

export const validation: MantineDemo = {
  type: 'demo',
  code,
  component: Demo,
};
