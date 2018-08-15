import { Dispatch } from 'redux';
import * as Constants from "./constants";

export interface IAction {
    type: string,
    payload?: string
}

const createAction = (name: string, value?: string): IAction => ({
    type: name,
    payload: value
});

const createAsyncAction = (dispatch: Dispatch, name: string) => (value: string) => dispatch(createAction(name, value));

export const setSearchField = (text: string) =>
    createAction(Constants.CHANGE_SEARCH_FIELD, text);

export const requestRobots = (dispatch: Dispatch) => {
    dispatch(createAction(Constants.REQUEST_ROBOTS_PENDING));

    fetch("https://jsonplaceholder.typicode.com/users")
        .then(response => response.json())
        .then(createAsyncAction(dispatch, Constants.REQUEST_ROBOTS_SUCCESS))
        .catch(createAsyncAction(dispatch, Constants.REQUEST_ROBOTS_FAILED));
};