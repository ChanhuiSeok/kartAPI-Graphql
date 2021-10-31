import { getUserId, getMatch, getMatchMemberByTeam, getMatchMemberByIndi } from "./db";

const resolvers = {
  Query: {
    user: (_, { usrName }) => getUserId(usrName),
    matches: (_, { usrId }) => getMatch(usrId),
    matchTeamMember: (_, { matchId }) => getMatchMemberByTeam(matchId),
    matchIndiMember: (_, { matchId }) => getMatchMemberByIndi(matchId),
  },
};

export default resolvers;
