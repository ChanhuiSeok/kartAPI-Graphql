import { getUserId, getMatch } from "./db";

const resolvers = {
  Query:{
    user: (_, {usrName}) => getUserId(usrName),
    matches: (_, {usrId}) => getMatch(usrId)
  }
}

export default resolvers;