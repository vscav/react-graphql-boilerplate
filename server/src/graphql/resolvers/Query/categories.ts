import { Category } from "#root/db/models";

const categoriesResolver = () => {
  return Category.findAll();
};

export default categoriesResolver;
