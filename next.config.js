if (process.env.NODE_ENV === "production") {
    module.exports = {
        env: {
            CRUD_API_URI: "https://rellios-api.vercel.app",
            IMAGE_BASE_URI: ""
        }
    }
}
else {
    module.exports = {
        env: {
            // CRUD_API_URI: "http://localhost:1337",
            CRUD_API_URI: "https://relliosadmin.herokuapp.com",

            // IMAGE_BASE_URI: "http://localhost:1337"
            IMAGE_BASE_URI: ""
        }
    }
}
