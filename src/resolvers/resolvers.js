const UserModel = require('../models/userModel');

const resolvers = {
  Query: {
    getAllUsers: async () => {
      return await UserModel.find();
    },
  },
  Mutation: {
    createUser: async (_, { name, age }) => {
      const newUser = new UserModel({ name, age });
      const res = await newUser.save();
      return res;
    }
  },
};

module.exports = resolvers;