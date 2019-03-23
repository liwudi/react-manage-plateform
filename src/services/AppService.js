/**
 * Created by mapbar_front on 2019-03-23.
 */
import Request from './Request';
export function getData(data) {
    return Request.get('https://api.douban.com/v2/movie/in_theaters', data);
}
