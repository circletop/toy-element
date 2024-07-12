import { type Meta, type StoryObj, type ArgTypes } from '@storybook/vue3';
import { fn, within, userEvent,expect } from '@storybook/test';

import { CrButton, CrButtonGroup } from 'circle-ui';

type Story = StoryObj<typeof CrButton> & { argTypes?: ArgTypes; };


const meta: Meta<typeof CrButton> = {
  tags: ['autodocs'],
  argTypes: {
    type: {
      control: { type: 'select' },
      options: ["primary" , "success" , "warning" , "info" , 'danger'],
    },
    size: {
      control: { type: 'select' },
      options: ['small', 'default', 'large'],
    },
    disabled: { control: 'boolean' },
    loading: { control: 'boolean' },
    useThrottle: { control: 'boolean' },
    throttleDuration: { control: 'number' },
    autoFocus: { control: 'boolean' },
    tag: { control: { type: 'select' }, options: ['button', 'a', ''] },
    nativeType: { control: { type: 'select' }, options: ['button', 'submit', 'reset', ''] },
    icon: { control: 'text' },
    loadingIcon: { control: 'text' },
    round: { control: 'boolean' },
    plain: { control: 'boolean' },
    circle: { control: 'boolean' },
  },
  args: {
    onClick: fn()
  }
}

const container = (val: string) => `
<div style="margin: 5px;">
${val}
</div>
`
export const Default: Story & { args: { content: string; }; } = {
  argTypes: {
    content: { control: 'text' },
  },
  args: {
    type: 'primary',
    content: 'Button',
  },
  render: (args) => ({
    components: { CrButton },
    setup() { return { args }; },
    template:
    container(`<cr-button v-bind="args">{{args.content}}</cr-button>`)
  }),
  // 测试
  play: async ({ args, canvasElement, step }) => {
    const canvas = within(canvasElement);
    await step('click Btn', async () => {
      await userEvent.click(canvas.getByRole('button'));
    })
    expect(args.onClick).toHaveBeenCalled();
  }
}
export const ButtonGroup: Story & { args: { content1: string, content2: string; }; } = {
  argTypes: {
    groupType: {
      control: { type: "select" },
      options: ["primary", "success", "warning", "danger", "info", ""],
    },
    groupSize: {
      control: { type: "select" },
      options: ["large", "default", "small", ""],
    },
    groupDisabled: {
      control: "boolean",
    },
    content1: {
      control: { type: "text" },
      defaultValue: "Button1",
    },
    content2: {
      control: { type: "text" },
      defaultValue: "Button2",
    }
  },
  args: {
    round: true,
    content1: "Button1",
    content2: "Button2",
  },
  render: (args) => ({
    components: { CrButton, CrButtonGroup },
    setup() { return { args }; },
    template:
      container(`
        <cr-button-group :size="args.groupSize" :type="args.groupType" :disabled="args.groupDisabled">
          <cr-button v-bind="args">{{args.content1}}</cr-button>
          <cr-button v-bind="args">{{args.content2}}</cr-button>
        </cr-button-group>`
      )
  })
}

export default meta;

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories
// export default {
//   title: 'Example/Button',
//   component: MyButton,
//   tags: ['autodocs'],
//   argTypes: {
//     size: { control: { type: 'select' }, options: ['small', 'medium', 'large'] },
//     backgroundColor: { control: 'color' },
//   },
//   // Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#action-args
//   args: { onClick: fn() },
// };

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
