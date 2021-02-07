const token = "PUT YOUR BEARER TOKEN HERE"

class Connect {
    constructor() {

    }

    get header() {
        return {
                "User-Agent": "v2RecentSearchJS",
                "authorization": `Bearer ${token}`
                }
    }
}

module.exports = Connect