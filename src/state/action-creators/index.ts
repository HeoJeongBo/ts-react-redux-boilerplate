import axios from "axios";
import { Dispatch } from "redux";
import { ActionType } from "../action-types";
import { Action } from "../actions";

export const searcRepositories = (term: string) => {
    return async (dispatch: Dispatch<Action>) => {
        dispatch({
            type: ActionType.SEARCH_REPOSITORIES,
        });

        try {
            const { data } = await axios.get(
                "https://registry.npmjs.org/-/v1/search",
                {
                    params: {
                        text: term,
                    },
                }
            );

            const names = data.objects.map(
                (result: any) => result.package.name
            );
            console.log(names);

            dispatch({
                type: ActionType.SEARCH_REPOSITORIES_SUCCESS,
                payload: names,
            });
        } catch (err) {
            dispatch({
                type: ActionType.SEARCH_REPOSITORIES_ERROR,
                payload: err.message,
            });
        }
    };
};
