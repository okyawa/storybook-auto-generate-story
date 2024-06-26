import type { Meta, StoryObj } from '@storybook/react';

import { SquareButton } from './square-buttton';

const meta = {
  component: SquareButton,
} satisfies Meta<typeof SquareButton>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: "children",
    disabled: true
  }
};

export const Disabled: Story = {
  args: {
    children: "children",
    disabled: false
  }
};

export const LongLabel: Story = {
  args: {
    children: "長いと省略表記されますよ",
    disabled: true
  }
};