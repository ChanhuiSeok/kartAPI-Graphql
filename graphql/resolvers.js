import { getUserId } from "./db";

const resolvers = {
  Query:{
    user: (_, {usrName}) => getUserId(usrName)
  }
}

export default resolvers;