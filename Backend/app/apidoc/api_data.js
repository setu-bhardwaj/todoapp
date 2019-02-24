define({ "api": [
  {
    "group": "Friend",
    "version": "1.0.0",
    "type": "get",
    "url": "/api/v1/users/userId/friendDetails",
    "title": "Get all Friend details.",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "userId",
            "description": "<p>userId of the user. (params) (required)</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Authorization of the user. (header params) (required)</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "object",
            "optional": false,
            "field": "myResponse",
            "description": "<p>shows error status, message, http status code, result.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "    {\n\"error\": false,\n\"message\": \"Friend Details Found\",\n\"status\": 200,\n\"data\": [\n    {\n        \"id\": \"TVSvdRFUz\",\n        \"requestedById\": \"wQMNLE1JK\",\n        \"requestedToId\": \"gcHB6b649\",\n        \"requestedByName\": \"Happy\",\n        \"requestedToName\": \"Rahul\",\n        \"status\": \"Send\"\n    }",
          "type": "object"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "\n{\n    \"error\": true,\n    \"message\": \"No User Found\",\n    \"status\": 404,\n    \"data\": null\n}",
          "type": "json"
        }
      ]
    },
    "filename": "routes/user.js",
    "groupTitle": "Friend",
    "name": "GetApiV1UsersUseridFrienddetails"
  },
  {
    "group": "Friend",
    "version": "1.0.0",
    "type": "post",
    "url": "/api/v1/users/friendsDetails",
    "title": "Add Friend.",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Authorization of the friends. (auth headers) (required)</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "requestedById",
            "description": "<p>requestedById of the friends.  (body params) (required)</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "requestedByName",
            "description": "<p>requestedByName of the friends. (body params) (required)</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "requestedToId",
            "description": "<p>requestedToId of the friends. (body params) (required)</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "requestedToName",
            "description": "<p>requestedToName of the friends. (body params) (required)</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "status",
            "description": "<p>status of the friends. (body params) (required)</p>"
          },
          {
            "group": "Parameter",
            "type": "object",
            "optional": false,
            "field": "requestedUserDetails",
            "description": "<p>requestedUserDetails of the friends. (body params) (required)</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "object",
            "optional": false,
            "field": "myResponse",
            "description": "<p>shows error status, message, http status code, result.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n            data: null\n            error: false\n            message: \"Friend Request Sent Successfully\"\n            status: 200\n}",
          "type": "object"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "\n{\n\t    \"error\": true,\n\t    \"message\": \"No Result Found\",\n\t    \"status\": 404,\n\t    \"data\": null\n\t   }",
          "type": "json"
        }
      ]
    },
    "filename": "routes/user.js",
    "groupTitle": "Friend",
    "name": "PostApiV1UsersFriendsdetails"
  },
  {
    "group": "Friend",
    "version": "1.0.0",
    "type": "post",
    "url": "/api/v1/users/updatefriendsDetails",
    "title": "Update Friend Details.",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Authorization of the friends. (auth headers) (required)</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "id",
            "description": "<p>id of the friends.  (body)</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "requestedById",
            "description": "<p>requestedById of the friends.  (body)</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "requestedByName",
            "description": "<p>requestedByName of the friends.  (body)</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "requestedToId",
            "description": "<p>requestedToId of the friends.  (body)</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "requestedToName",
            "description": "<p>requestedToName of the friends.  (body)</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "status",
            "description": "<p>status of the friends.  (body)</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "object",
            "optional": false,
            "field": "myResponse",
            "description": "<p>shows error status, message, http status code, result.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "data: {}\n            error: false\n            message: \"Friends Details Updated Successfully\"\n            status: 200",
          "type": "object"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "\n{\n\t    \"error\": true,\n\t    \"message\": \"No Result Found\",\n\t    \"status\": 404,\n\t    \"data\": null\n\t   }",
          "type": "json"
        }
      ]
    },
    "filename": "routes/user.js",
    "groupTitle": "Friend",
    "name": "PostApiV1UsersUpdatefriendsdetails"
  },
  {
    "group": "Todo",
    "version": "1.0.0",
    "type": "get",
    "url": "/api/v1/todo/:userId/getTodo",
    "title": "get todo list.",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Authorization of the friends. (body) (required)</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "userId",
            "description": "<p>userId of the friends.  (body) (required)</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "object",
            "optional": false,
            "field": "myResponse",
            "description": "<p>shows error status, message, http status code, result.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "     \n       {\n    \"error\": false,\n    \"message\": \"User todo Details Found\",\n    \"status\": 200,\n    \"data\": [\n        {\n            \"name\": \"morning walk\",\n            \"history\": [\n               \"created by happy\"\n            ],\n            \"todoId\": \"oovYCI0RX\",\n            \"userId\": \"wQMNLE1JK\",\n            \"status\": \"ACCEPTED\",\n            \"subToDoItems\": [],\n            \"createdOn\": \"2019-02-21T17:22:38.836Z\"\n        \n    ]\n}",
          "type": "object"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "\n{\n    \"error\": true,\n    \"message\": \"No item Found\",\n    \"status\": 404,\n    \"data\": null\n}",
          "type": "json"
        }
      ]
    },
    "filename": "routes/todo.js",
    "groupTitle": "Todo",
    "name": "GetApiV1TodoUseridGettodo"
  },
  {
    "group": "Todo",
    "version": "1.0.0",
    "type": "post",
    "url": "/api/v1/todo/addTodo",
    "title": "Adding a new Todo.",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Authorization of the user. (body) (required)</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "userId",
            "description": "<p>userId of the user.  (body) (required)</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "toDostatus",
            "description": "<p>toDostatus of the friends.  (body)</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "name",
            "description": "<p>name of the todo list.  (body) (required)</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "todoId",
            "description": "<p>Todo id of the todo item.  (body)</p>"
          },
          {
            "group": "Parameter",
            "type": "array",
            "optional": false,
            "field": "subToDoItems",
            "description": "<p>subToDoItems of the user.  (body)</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "status",
            "description": "<p>status of the friend.  (body)</p>"
          },
          {
            "group": "Parameter",
            "type": "array",
            "optional": false,
            "field": "history",
            "description": "<p>history of the todo.  (body)</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "object",
            "optional": false,
            "field": "myResponse",
            "description": "<p>shows error status, message, http status code, result.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "     \n     {\n    \"error\": false,\n    \"message\": \"todo item created\",\n    \"status\": 200,\n    \"data\": {\n        \"name\": \"morning walk\",\n        \"history\": [\n            \"NA\"\n        ],\n        \"_id\": \"5c6ede876a323842b480e0ed\",\n        \"todoId\": \"QknwFNN38\",\n        \"userId\": \"wQMNLE1JK\",\n        \"status\": \"ACCEPTED\",\n        \"subToDoItems\": [],\n        \"createdOn\": \"2019-02-21T17:23:19.955Z\",\n        \"__v\": 0\n    }\n}",
          "type": "object"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "\n{\n    \"error\": true,\n    \"message\": \"Failed to add new todo item\",\n    \"status\": 500,\n    \"data\": null\n }",
          "type": "json"
        }
      ]
    },
    "filename": "routes/todo.js",
    "groupTitle": "Todo",
    "name": "PostApiV1TodoAddtodo"
  },
  {
    "group": "Todo",
    "version": "1.0.0",
    "type": "post",
    "url": "/api/v1/todo/:todoId/deleteTodo",
    "title": "to delete Todo item.",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Authorization of the friends. (body) (required)</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "todoId",
            "description": "<p>todoId of the item.  (body) (required)</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "object",
            "optional": false,
            "field": "myResponse",
            "description": "<p>shows error status, message, http status code, result.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "     \n    {\n    \"error\": false,\n    \"message\": \"Todo deleted successfully\",\n    \"status\": 200,\n    \"data\": {\n        \"n\": 0,\n        \"ok\": 1,\n        \"deletedCount\": 0\n    }\n}",
          "type": "object"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "\n{\n\t    \"error\": true,\n\t    \"message\": \"No Result Found\",\n\t    \"status\": 404,\n\t    \"data\": null\n\t   }",
          "type": "json"
        }
      ]
    },
    "filename": "routes/todo.js",
    "groupTitle": "Todo",
    "name": "PostApiV1TodoTodoidDeletetodo"
  },
  {
    "group": "Todo",
    "version": "1.0.0",
    "type": "put",
    "url": "/api/v1/todo/updateTodo",
    "title": "to update the todo.",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Authorization of the user. (body) (required)</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "userId",
            "description": "<p>userId of the user.  (body) (required)</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "toDostatus",
            "description": "<p>toDostatus of the friends.  (body)</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "name",
            "description": "<p>name of the todo list.  (body) (required)</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "todoId",
            "description": "<p>Todo id of the todo item.  (body)</p>"
          },
          {
            "group": "Parameter",
            "type": "array",
            "optional": false,
            "field": "subToDoItems",
            "description": "<p>subToDoItems of the user.  (body)</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "status",
            "description": "<p>status of the friend.  (body)</p>"
          },
          {
            "group": "Parameter",
            "type": "array",
            "optional": false,
            "field": "history",
            "description": "<p>history of the todo.  (body)</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "object",
            "optional": false,
            "field": "myResponse",
            "description": "<p>shows error status, message, http status code, result.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "     \n     {\n    \"error\": false,\n    \"message\": \"details updated\",\n    \"status\": 200,\n    \"data\": {\n        \"n\": 0,\n        \"nModified\": 0,\n        \"ok\": 1\n    }\n}",
          "type": "object"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "\n{\n\t    \"error\": true,\n\t    \"message\": \"No Result Found\",\n\t    \"status\": 404,\n\t    \"data\": null\n\t   }",
          "type": "json"
        }
      ]
    },
    "filename": "routes/todo.js",
    "groupTitle": "Todo",
    "name": "PutApiV1TodoUpdatetodo"
  },
  {
    "group": "UserDetails",
    "version": "1.0.0",
    "type": "get",
    "url": "/api/v1/users/userId/all",
    "title": "Get all Other User details.",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "userId",
            "description": "<p>userId of the user. (params) (required)</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Authorization of the user. (header params) (required)</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "object",
            "optional": false,
            "field": "myResponse",
            "description": "<p>shows error status, message, http status code, result.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "     {\n\"error\": false,\n\"message\": \"All Other User Details Found\",\n\"status\": 200,\n\"data\": [\n    {\n        \"userId\": \"2Z9hEoiFD\",\n        \"firstName\": \"Rahul\",\n        \"lastName\": \"Agarwal\",\n        \"email\": \"rahul1213@gmail.com\",\n        \"mobileNumber\": 0,\n        \"createdOn\": \"2019-02-18T14:21:30.000Z\"\n    }",
          "type": "object"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "\n{\n\t    \"error\": true,\n\t    \"message\": \"No User Found\",\n\t    \"status\": 400,\n\t    \"data\": null\n\t   }",
          "type": "json"
        }
      ]
    },
    "filename": "routes/user.js",
    "groupTitle": "UserDetails",
    "name": "GetApiV1UsersUseridAll"
  },
  {
    "group": "UserDetails",
    "version": "1.0.0",
    "type": "get",
    "url": "/api/v1/users/userId/userDetails",
    "title": "Get Single user details.",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "userId",
            "description": "<p>userId of the user. (params) (required)</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Authorization of the user. (header params) (required)</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "object",
            "optional": false,
            "field": "myResponse",
            "description": "<p>shows error status, message, http status code, result.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "         {\n    \"error\": false,\n    \"message\": \"User Details Found\",\n    \"status\": 200,\n    \"data\": {\n        \"userId\": \"wQMNLE1JK\",\n        \"firstName\": \"Happy\",\n        \"lastName\": \"Singh\",\n        \"email\": \"happy1@gmail.com\",\n        \"countryCode\": \"+91\",\n        \"mobileNumber\": 7878787878,\n        \"createdOn\": \"2019-02-21T12:49:48.000Z\"\n    }\n}",
          "type": "object"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "\n\nError:\n{\n    \"error\": true,\n    \"message\": \"No User Found\",\n    \"status\": 404,\n    \"data\": null\n}",
          "type": "json"
        }
      ]
    },
    "filename": "routes/user.js",
    "groupTitle": "UserDetails",
    "name": "GetApiV1UsersUseridUserdetails"
  },
  {
    "group": "UserDetails",
    "version": "1.0.0",
    "type": "get",
    "url": "/api/v1/users/view/all",
    "title": "Get all user details.",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "userId",
            "description": "<p>userId of the user. (params) (required)</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Authorization of the user. (header params) (required)</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "object",
            "optional": false,
            "field": "myResponse",
            "description": "<p>shows error status, message, http status code, result.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "         {\n    \"error\": false,\n    \"message\": \"All User Details Found\",\n    \"status\": 200,\n    \"data\": [\n        {\n            \"userId\": \"gcHB6b649\",\n            \"firstName\": \"Rahul\",\n            \"lastName\": \"Agarwal\",\n            \"password\": \"$2b$10$0AmiwGEAdh6TPouCNWGdVunF7oigtDZKMjicGNGPUDp91.IsvcAsi\",\n            \"email\": \"rahul1211@gmail.com\",\n            \"countryCode\": \"91\",\n            \"mobileNumber\": 0,\n            \"createdOn\": \"2019-02-19T18:38:25.000Z\"\n        },\n        {\n            \"userId\": \"wQMNLE1JK\",\n            \"firstName\": \"Happy\",\n            \"lastName\": \"Singh\",\n            \"password\": \"$2b$10$lVqT9MxwiAmOjbvzVGeD6.OcU.ErzEasrd7U2QX1WnBcNV8ZBhpWO\",\n            \"email\": \"happy1@gmail.com\",\n            \"countryCode\": \"+91\",\n            \"mobileNumber\": 7878787878,\n            \"createdOn\": \"2019-02-21T12:49:48.000Z\"\n        }\n    ]\n}",
          "type": "object"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "\n\nError:\n{\n    \"error\": true,\n    \"message\": \"AuthorizationToken Is Missing In Request\",\n    \"status\": 400,\n    \"data\": null\n}",
          "type": "json"
        }
      ]
    },
    "filename": "routes/user.js",
    "groupTitle": "UserDetails",
    "name": "GetApiV1UsersViewAll"
  },
  {
    "group": "UserDetails",
    "version": "1.0.0",
    "type": "put",
    "url": "/api/v1/users/userId/edit",
    "title": "Editing the User details.",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "userId",
            "description": "<p>userId of the user. (params) (required)</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Authorization of the user. (header params) (required)</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "firstName",
            "description": "<p>firstName of the user. (body params) (required)</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "lastName",
            "description": "<p>lastName of the user. (body params) (required)</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "email",
            "description": "<p>email of the user. (body params) (required)</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "countryCode",
            "description": "<p>countryCode of the user. (body params) (required)</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "mobileNumber",
            "description": "<p>mobileNumber of the user. (body params) (required)</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "password",
            "description": "<p>password of the user. (body params) (required)</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "object",
            "optional": false,
            "field": "myResponse",
            "description": "<p>shows error status, message, http status code, result.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "       {\n  \"error\": false,\n  \"message\": \"User details edited\",\n  \"status\": 200,\n  \"data\": {\n      \"userId\": \"wQMNLE1JK\",\n      \"firstName\": \"Happy\",\n      \"lastName\": \"Singh\",\n      \"email\": \"happy1@gmail.com\",\n      \"countryCode\": \"+91\",\n      \"mobileNumber\": 7878787878,\n      \"createdOn\": \"2019-02-21T12:49:48.000Z\",\n  }\n}",
          "type": "object"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "\n{\n\t    \"error\": true,\n\t    \"message\": \"No User Found\",\n\t    \"status\": 400,\n\t    \"data\": null\n\t   }",
          "type": "json"
        }
      ]
    },
    "filename": "routes/user.js",
    "groupTitle": "UserDetails",
    "name": "PutApiV1UsersUseridEdit"
  },
  {
    "group": "Users",
    "version": "1.0.0",
    "type": "get",
    "url": "/api/v1/users/userId/delete",
    "title": "Delete .",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "userId",
            "description": "<p>userId of the user. (params) (required)</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Authorization of the user. (header params) (required)</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "object",
            "optional": false,
            "field": "myResponse",
            "description": "<p>shows error status, message, http status code, result.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "     {\n\"error\": false,\n\"message\": \"Deleted the user successfully\",\n\"status\": 200,\n\"data\": {\n    \"n\": 1,\n    \"ok\": 1\n}",
          "type": "object"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "\n{\n\t    \"error\": true,\n\t    \"message\": \"No User Found\",\n\t    \"status\": 400,\n\t    \"data\": null\n\t   }",
          "type": "json"
        }
      ]
    },
    "filename": "routes/user.js",
    "groupTitle": "Users",
    "name": "GetApiV1UsersUseridDelete"
  },
  {
    "type": "post",
    "url": "/api/v1/users/forgotPassword",
    "title": "Forgot Password",
    "version": "1.0.0",
    "group": "Users",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "email",
            "description": "<p>email of the user.  (body params) (required)</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "object",
            "optional": false,
            "field": "myResponse",
            "description": "<p>shows error status, message, http status code, result.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "data: {}\n            error: false\n            message: \"Friends Details Updated Successfully\"\n            status: 200\n\n            data: {\n                code: \"so3hddyKr\"\n                email: \"happy3@gmail.com.com\"\n                userId: \"VqPBV2KU6\"\n                }\n                error: false\n                message: \"Email Sent Successfully\"\n                status: 200",
          "type": "object"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "\n{\n    \"error\": true,\n    \"message\": \"No User Found\",\n    \"status\": 404,\n    \"data\": null\n}",
          "type": "json"
        }
      ]
    },
    "filename": "routes/user.js",
    "groupTitle": "Users",
    "name": "PostApiV1UsersForgotpassword"
  },
  {
    "group": "Users",
    "version": "1.0.0",
    "type": "post",
    "url": "/api/v1/users/login",
    "title": "Login.",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "email",
            "description": "<p>email of the user. (body params) (required)</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "password",
            "description": "<p>password of the user. (body params) (required)</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "object",
            "optional": false,
            "field": "myResponse",
            "description": "<p>shows error status, message, http status code, result.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "         {\n    \"error\": false,\n    \"message\": \"Login Successful\",\n    \"status\": 200,\n    \"data\": {\n        \"authToken\": eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqd3RpZCI6IjFDdGxfeWQ0ciIsImlhdCI6MTU1MDc1NDczMDM4OSwiZXhwIjoxNTUwODQxMTMwLCJzdWIiOiJhdXRoVG9rZW4iLCJpc3MiOiJlZENoYXQiLCJkYXRhIjp7InVzZXJJZCI6IndRTU5MRTFKSyIsImZpcnN0TmFtZSI6IkhhcHB5IiwibGFzdE5hbWUiOiJTaW5naCIsImVtYWlsIjoiaGFwcHkxQGdtYWlsLmNvbSIsImNvdW50cnlDb2RlIjoiKzkxIiwibW9iaWxlTnVtYmVyIjo3ODc4Nzg3ODc4fX0.LM4bEVmJ72MPnx7zmldTPXjM7tcR__x9eS7iFxjElM0\n        \"userDetails\": {\n            \"userId\": \"wQMNLE1JK\",\n            \"firstName\": \"Happy\",\n            \"lastName\": \"Singh\",\n            \"email\": \"happy1@gmail.com\",\n            \"countryCode\": \"+91\",\n            \"mobileNumber\": 7878787878\n        }\n    }\n}",
          "type": "object"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "\n{\n    \"error\": true,\n    \"message\": \"Password not entered.Login Failed\",\n    \"status\": 400,\n    \"data\": null\n}",
          "type": "json"
        }
      ]
    },
    "filename": "routes/user.js",
    "groupTitle": "Users",
    "name": "PostApiV1UsersLogin"
  },
  {
    "type": "post",
    "url": "/api/v1/users/logout",
    "title": "Logout",
    "version": "1.0.0",
    "group": "Users",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "userId",
            "description": "<p>userId of the user. (auth headers) (required)</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Authorization of the user. (body params) (required)</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "object",
            "optional": false,
            "field": "myResponse",
            "description": "<p>shows error status, message, http status code, result.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "         {\n    \"error\": false,\n    \"message\": \"Logged Out Successfully\",\n    \"status\": 200,\n    \"data\": null\n}",
          "type": "object"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "\n{\n    \"error\": true,\n    \"message\": \"AuthorizationToken Is Missing In Request\",\n    \"status\": 400,\n    \"data\": null\n}",
          "type": "json"
        }
      ]
    },
    "filename": "routes/user.js",
    "groupTitle": "Users",
    "name": "PostApiV1UsersLogout"
  },
  {
    "type": "post",
    "url": "/api/v1/users/signup",
    "title": "Signup.",
    "version": "1.0.0",
    "group": "Users",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "firstName",
            "description": "<p>firstName of the user. (body params) (required)</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "lastName",
            "description": "<p>lastName of the user. (body params) (required)</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "email",
            "description": "<p>email of the user. (body params) (required)</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "countryCode",
            "description": "<p>countryCode of the user. (body params) (required)</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "mobileNumber",
            "description": "<p>mobileNumber of the user. (body params) (required)</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "password",
            "description": "<p>password of the user. (body params) (required)</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "        {\n\t\t\"error\": false,\n\t\t\"message\": \"User created\",\n\t\t\"status\": 200,\n\t\t\"data\": {\n        \"userId\": \"wQMNLE1JK\",\n        \"firstName\": \"Happy\",\n        \"lastName\": \"Singh\",\n        \"email\": \"happy1@gmail.com\",\n        \"countryCode\": \"+91\",\n        \"mobileNumber\": 7878787878,\n        \"createdOn\": \"2019-02-21T12:49:48.000Z\"\n\t\t}\n\t}",
          "type": "object"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "\n{\n\t\t\"error\": true,\n\t\t\"message\": \"One or More Parameter(s) is missing\",\n\t\t\"status\": 400,\n\t\t\"data",
          "type": "json"
        }
      ]
    },
    "filename": "routes/user.js",
    "groupTitle": "Users",
    "name": "PostApiV1UsersSignup"
  }
] });
