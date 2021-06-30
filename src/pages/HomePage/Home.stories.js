import Home from "./HomePage";

export default {
  title: "HomePage",
  component: Home,
};

const Template = (args) => <Home {...args} />;

export const listedPlaces = Template.bind({});
listedPlaces.args = {};
