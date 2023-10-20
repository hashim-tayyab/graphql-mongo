const UserModel = require('../models/userModel');

const resolvers = {
  Query: {
    getAllUsers: async () => {
      return await UserModel.find();
    },
    getUser: async (_, { id }) => {
      return await UserModel.findOne({_id: id})
    }
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