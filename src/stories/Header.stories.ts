import { CommonModule } from '@angular/common';
import { moduleMetadata } from '@storybook/angular';
// also exported from '@storybook/angular' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/angular/types-6-0';

import Button from './button.component';
import Header from './header.component';

export default {
  title: 'Example/Header',
  component: Header,
  decorators: [
    moduleMetadata({
      declarations: [Button],
      imports: [CommonModule]
    })
  ]
} as Meta;

const Template: Story<Header> = (args: Header) => ({
  props: args
});

export const LoggedIn = Template.bind({});
LoggedIn.args = {
  user: {}
};

export const LoggedOut = Template.bind({});
LoggedOut.args = {};
