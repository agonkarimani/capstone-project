import HomePage from "./HomePage";
import Home from "./HomePage";

export default {
  title: "HomePage",
  component: Home,
};

const Template = (args) => <HomePage {...args} />;

export const listedPlaces = Template.bind({});
listedPlaces.args = {};
