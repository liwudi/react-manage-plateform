/**
 * Created by mapbar_front on 2019-03-23.
 */
import promise from  'es6-promise';
import 'whatwg-fetch';

function request(options) {
    let url = options.url + '?';
    let config = {
        methods: options.methods,
        headers: {
            "Content-Type": "application/json",
        }
    };
    if (options.methods.toLowerCase() === 'get') {
        config.methods = "GET";
        for (let i in options.data) {
            url += `${i}=${options.data[i]}&`
        }
    } else {
        config.methods = "POST";
        config.body = JSON.stringify(options.data)
    }
    return fetch(url).then(res=>{
        return res.json()
    })
}

export default {
    get: function (url, data) {
        return request({
            url: url,
            methods: 'GET',
            data: data
        })
    },
    post: function (url, data) {
        return request({
            url: url,
            methods: 'post',
            data: data
        })
    },
    request
}
