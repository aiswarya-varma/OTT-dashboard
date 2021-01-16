/**
 * Redux actions
 */

/**
 * Action types
 */
import { GET_DATA, SEARCH_DATA, SET_SEARCHING, RESTORE } from './utils.js';

/**
 * Dispatch action using data loaded from json file
 * @param {Number} dataSet page number 
 */
export const getDataSet = dataSet => {
    return (dispatch) => {
        return fetch(`data/CONTENTLISTINGPAGE-PAGE${dataSet}.json`)
            .then(res => res.json())
            .then(data => dispatch({
                type: GET_DATA,
                payload: data
            }))
    }
};

/**
 * Dispatch action using data that matched the input search string
 * @param {String} searchBy search input string
 */
export const searchInDataSet = searchBy => {
    return (dispatch) => {
        const inp = searchBy.toLowerCase();

        fetch(`data/CONTENTLISTINGPAGE-PAGE1.json`)
            .then(res => res.json())
            .then(json => {
                return json.page['content-items'].content.filter((c) => c.name.toLowerCase().includes(inp));
            })
            .then(data => dispatch({
                type: SEARCH_DATA,
                payload: data
            }))
    }
};

/**
 * Turn searching phase on/off
 * @param {boolean} setting is user in searching phase or not
 */
export const setSearching = (setting) => ({
    type: SET_SEARCHING,
    payload: setting
})

/**
 * Action to restore data
 */
export const restore = () => ({
    type: RESTORE,
});