import { Category, Project } from "#root/db/models";

const resolvers = {
  projects: (category: Category) => {
    return Project.findAll({
      include: [
        {
          model: Category,
          where: { id: category.id },
        },
      ],
      order: [["name", "ASC"]],
    });
  },
};

export default resolvers;
