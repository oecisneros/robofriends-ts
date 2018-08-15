import { IAction } from "./actions";
import * as Constants from "./constants";

const createReducer = (initialState: any, createPayload: (action: IAction) => any) => (state: any, action: IAction) =>
    Object.assign({}, state || initialState, createPayload(action || {}));

const createSimpleReducer = (key: string, initialState: any, createPayload: (action: IAction) => any) =>
    createReducer(initialState, action => (action.type === key) ? createPayload(action) : null);

const initialStateSearch = {
    searchField: ""
};

const initialStateRobots = {
    error: "",
    isPending: false,
    robots: []
};

export const searchRobots =
    createSimpleReducer(Constants.CHANGE_SEARCH_FIELD, initialStateSearch,
        action => ({ searchField: action.payload }));

export const requestRobots =
    createReducer(initialStateRobots, action => {
        switch (action.type) {
            case Constants.REQUEST_ROBOTS_PENDING:
                return { isPending: true };
            case Constants.REQUEST_ROBOTS_SUCCESS:
                return { isPending: false, robots: action.payload };
            case Constants.REQUEST_ROBOTS_FAILED:
                return { isPending: false, error: action.payload };
            default:
                return null;
        }
    });