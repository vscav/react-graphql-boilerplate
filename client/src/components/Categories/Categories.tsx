import { useQuery } from "@apollo/react-hooks";
import gql from "graphql-tag";
import * as React from "react";

export interface CategoriesProps {}

interface Category {
  id: string;
  name: string;
  projects: Project[];
}

interface QueryData {
  categories: Category[];
}

interface Project {
  id: string;
  name: string;
}

const query = gql`
  {
    categories {
      id
      name
      projects {
        id
        name
      }
    }
  }
`;

const Categories: React.FC = () => {
  const { data, loading } = useQuery<QueryData>(query);

  if (loading) return <div>Loading ...</div>;

  return (
    <div>
      {data &&
        data.categories.map((category) => (
          <div key={category.id}>
            <h2>{category.name}</h2>
            <div>
              {category.projects.map((project) => (
                <h3 key={project.id}>{project.name}</h3>
              ))}
            </div>
          </div>
        ))}
    </div>
  );
};

export default Categories;
