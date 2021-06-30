import FavoritesPage from "./FavoritesPage";

export default {
  title: "FavoritesPage",
  component: FavoritesPage,
};

const Template = (args) => <FavoritesPage {...args} />;

export const listedPlaces = Template.bind({});
listedPlaces.args = {};
