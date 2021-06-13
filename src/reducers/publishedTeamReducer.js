import {
  GET_TEAMS,
  GET_LIKED_TEAMS,
  GET_USERS_TEAMS,
  ADD_TEAM,
  EDIT_TEAM,
  DELETE_TEAM,
  CLEAR_TEAMS,
  TEAM_ERROR,
  ADD_COMMENT_TO_TEAM,
  DELETE_COMMENT_FROM_TEAM,
  UPDATE_TEAM_LIKES,
  CHANGE_TEAM_SYNC_PAIR_FILTER,
  CHANGE_TEAM_SYNC_LEVEL_FILTER,
  CHANGE_TEAM_SORT,
  CHANGE_TEAM_TAG_FILTER,
} from '../actions/types';

const initialState = {
  teams: [],
  totalTeamCount: 0,
  loading: true,
  error: {},
  syncPairFilter: 'None',
  syncLevelFilter: '0', // All
  teamTagFilter: [],
  sort: 'popular',
};

export default function (state = initialState, action) {
  switch (action.type) {
    case GET_TEAMS:
    case GET_LIKED_TEAMS:
    case GET_USERS_TEAMS:
      return {
        ...state,
        teams: [...state.teams, ...action.payload.teams],
        totalTeamCount: action.payload.totalTeamCount,
        loading: false,
      };
    case TEAM_ERROR:
      return {
        ...state,
        error: action.payload,
        loading: false,
      };
    case UPDATE_TEAM_LIKES:
      const newTeams = state.teams.map((team) => {
        return team._id === action.payload.id
          ? { ...team, likes: action.payload.likes }
          : team;
      });
      return {
        ...state,
        teams: newTeams,
        loading: false,
      };
    case ADD_TEAM:
      return {
        ...state,
        teams: [action.payload, ...state.teams],
        loading: false,
      };
    case EDIT_TEAM:
      const newTeamsArray = state.teams.map((team) => {
        return team._id === action.payload.id
          ? { ...team, description: action.payload.description }
          : team;
      });
      return {
        ...state,
        teams: newTeamsArray,
        loading: false,
      };
    case DELETE_TEAM:
      return {
        ...state,
        teams: state.teams.filter((team) => team._id !== action.payload),
        loading: false,
      };
    case ADD_COMMENT_TO_TEAM:
      const updatedTeamsWithNewComment = state.teams.map((team) => {
        return team._id === action.payload.teamId
          ? { ...team, comments: action.payload.data }
          : team;
      });
      return {
        ...state,
        teams: updatedTeamsWithNewComment,
        loading: false,
      };
    case DELETE_COMMENT_FROM_TEAM:
      const updatedTeamsAfterRemovingComment = state.teams.map((team) => {
        return team._id === action.payload.teamId
          ? {
              ...team,
              comments: team.comments.filter(
                (comment) => comment._id !== action.payload.commentId
              ),
            }
          : team;
      });
      return {
        ...state,
        teams: updatedTeamsAfterRemovingComment,
        loading: false,
      };
    case CHANGE_TEAM_SYNC_PAIR_FILTER:
      return {
        ...state,
        teams: [],
        syncPairFilter: action.payload,
      };
    case CHANGE_TEAM_SYNC_LEVEL_FILTER:
      return {
        ...state,
        teams: [],
        syncLevelFilter: action.payload,
      };
    case CHANGE_TEAM_TAG_FILTER:
      return {
        ...state,
        teams: [],
        teamTagFilter: action.payload,
      };
    case CHANGE_TEAM_SORT:
      return {
        ...state,
        teams: [],
        sort: action.payload,
      };
    case CLEAR_TEAMS:
      return {
        ...state,
        teams: [],
        totalTeamCount: 0,
      };
    default:
      return state;
  }
}
