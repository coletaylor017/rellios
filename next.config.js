if (process.env.NODE_ENV === "production") {
    module.exports = {
        env: {
            CRUD_API_URI: "https://relliosadmin.herokuapp.com"
        }
    }
}
else {
    module.exports = {
        env: {
            CRUD_API_URI: "http://localhost:1337"
        }
    }
}
