import { Meta, StoryObj } from "@storybook/angular";
import { userEvent, within } from "@storybook/test";
import { AppComponent } from "../../app/app.component";

const meta: Meta<AppComponent> = {
    title: 'toggle component',
    component: AppComponent,
    tags: ['autodocs'],
    render: (args) => ({
      props: {...args}
    })
}

export default meta;
type Story = StoryObj<AppComponent>;

export const ToggleOn: Story = {
  play: async ({canvasElement}) => {
    const canvas = within(canvasElement);
    const ele = canvas.getByLabelText("test");
    await userEvent.click(ele);
  }
}