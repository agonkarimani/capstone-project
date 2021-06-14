import Card from "./Card";
import imageFile from "./../../images/sightseeing/Elbphilharmonie.jpg";

export default {
  title: "Card",
  component: Card,
};

const Template = (args) => <Card {...args} />;

export const Default = Template.bind({});
Default.args = {
  image: imageFile,
  title: "Saranda - South Albania",
  text: "This is the info-text about the location above",
};
