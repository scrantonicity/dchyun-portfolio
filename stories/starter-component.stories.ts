import { html, TemplateResult } from 'lit';
import '../src/index.js';

export default {
  title: 'StarterComponent',
  component: 'starter-Component',
  argTypes: {},
};

interface Story<T> {
  (args: T): TemplateResult;
  args?: Partial<T>;
  argTypes?: Record<string, unknown>;
}

interface ArgTypes {
  title?: string;
}

const Template: Story<ArgTypes> = ({ title }: ArgTypes) => html`
  <starter-component title=${title}></starter-component>
`;

export const App = Template.bind({});
App.args = {
  title: 'My app',
};
