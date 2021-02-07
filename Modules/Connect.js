const token = "Put Your BEARER_TOKEN"

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