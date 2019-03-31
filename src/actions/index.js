/**
 * Created by mapbar_front on 2019-03-23.
 */
export const ADD = 'ADD';
export const DEL = 'DEL';
export const ADDLIST = 'ADDLIST';

export function addNumber(number) {
    return {
        type: ADD,
        number
    }
}
export function delNumber(number) {
    return {
        type: DEL,
        number
    }
}

export function addList(list) {
    return {
        type: ADDLIST,
        list
    }
}
