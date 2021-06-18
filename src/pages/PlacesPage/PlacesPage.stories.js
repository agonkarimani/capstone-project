import PlacesPage from "./PlacesPage";

export default {
  title: "PlacesPage",
  component: PlacesPage,
};

const Template = (args) => <PlacesPage {...args} />;

export const listedPlaces = Template.bind({});
listedPlaces.args = {};
