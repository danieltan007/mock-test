'use strict';

var Sequelize = require('sequelize');

/**
 * Actions summary:
 *
 * createTable "users", deps: []
 * createTable "todos", deps: [users]
 * addIndex "todos_pkey" to table "todos"
 * addIndex "users_pkey" to table "users"
 *
 **/

var info = {
    "revision": 1,
    "name": "create todos and users table",
    "created": "2022-12-05T08:11:11.242Z",
    "comment": ""
};

var migrationCommands = [{
        fn: "createTable",
        params: [
            "users",
            {
                "id": {
                    "type": Sequelize.INTEGER,
                    "field": "id",
                    "primaryKey": true,
                    "allowNull": false
                }
            },
            {}
        ]
    },
    {
        fn: "createTable",
        params: [
            "todos",
            {
                "id": {
                    "type": Sequelize.INTEGER,
                    "field": "id",
                    "primaryKey": true,
                    "allowNull": false,
                    "autoIncrementIdentity": true,
                    "autoIncrement": true
                },
                "name": {
                    "type": Sequelize.STRING(100),
                    "field": "name",
                    "allowNull": true
                },
                "user_id": {
                    "type": Sequelize.INTEGER,
                    "field": "user_id",
                    "references": {
                        "model": "users",
                        "key": "id"
                    },
                    "allowNull": true
                }
            },
            {}
        ]
    },
    {
        fn: "addIndex",
        params: [
            "todos",
            [{
                "name": "id"
            }],
            {
                "indexName": "todos_pkey",
                "name": "todos_pkey",
                "indicesType": "UNIQUE",
                "type": "UNIQUE"
            }
        ]
    },
    {
        fn: "addIndex",
        params: [
            "users",
            [{
                "name": "id"
            }],
            {
                "indexName": "users_pkey",
                "name": "users_pkey",
                "indicesType": "UNIQUE",
                "type": "UNIQUE"
            }
        ]
    }
];

module.exports = {
    pos: 0,
    up: function(queryInterface, Sequelize)
    {
        var index = this.pos;
        return new Promise(function(resolve, reject) {
            function next() {
                if (index < migrationCommands.length)
                {
                    let command = migrationCommands[index];
                    console.log("[#"+index+"] execute: " + command.fn);
                    index++;
                    queryInterface[command.fn].apply(queryInterface, command.params).then(next, reject);
                }
                else
                    resolve();
            }
            next();
        });
    },
    info: info
};
