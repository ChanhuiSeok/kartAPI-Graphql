import { getUser } from "./db";

const resolvers = {
  Query:{
    users: (_, {usrName}) => getUser(usrName)
  }
}

export default resolvers;