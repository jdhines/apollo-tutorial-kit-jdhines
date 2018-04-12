import casual from 'casual';

const resolvers = {
  Query: {
    author: (root, { args }) => {
      return { id: 1, firstName: "Hello", lastName: "world" };
    },
    allAuthors: () => {
      return [{ id: 1, firstName: "Hello", lastName: "world" }];
    }
  },
  Author: {
    posts: (author) => {
      return [
        { id: 1, title: 'A post', text: 'Some text', views: 2 },
        { id: 2, title: 'A different post', text: 'Different text', views: 300 }
      ];
    }
  },
  Post: {
    author: (post) => {
      return { id: 1, firstName: 'Hello', lastName: 'World' };
    }
  }
};

export default resolvers;
