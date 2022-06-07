module.exports = {
    "development": {
        "username": "root",
        "password": "12345",
        "database": "database_development",
        "host": "127.0.0.1",
        "dialect": "sqlite",
        "storage": "db.sqlite"
    },
    "test": {
        "username": "root",
        "password": "12345",
        "database": "database_test",
        "host": "127.0.0.1",
        "dialect": "sqlite"
    },
    "production": {
        "username": "root",
        "password": null,
        "database": "database_production",
        "host": "127.0.0.1",
        "dialect": "sqlite"
    }
}
