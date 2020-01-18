module.exports = class jsonplaceholder_dummy_data{
    static get(route, limit)
    {
        if (typeof route === "undefined" || typeof route !== 'string') {
            route = '/posts';//default path
        } else if (route.substring(0, 1) !== "/") {
            route = '/' + route;
        }
        if (typeof limit === "undefined" || isNaN(limit)) {
            limit = 5000;//max results
        }
        return fetch('https://jsonplaceholder.typicode.com' + route)
            .then((resp) => resp.json())
            .then(function (d) {
                return d.slice(0, limit);
            })
            .catch(function (error) {
                console.log(error);
            });
    }
};