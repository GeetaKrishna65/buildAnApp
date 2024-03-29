import type { StorybookConfig } from "@storybook/angular";

const config: StorybookConfig = {
  stories: [
    // "../src/**/*.mdx", 
    "../src/**/button.stories.@(js|jsx|mjs|ts|tsx)",
    "../src/stories/myStories/*.stories.@(js|jsx|mjs|ts|tsx)",
  ],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
  ],
  framework: {
    name: "@storybook/angular",
    options: {},
  },
  docs: {
    autodocs: "tag",
  },
};
export default config;
