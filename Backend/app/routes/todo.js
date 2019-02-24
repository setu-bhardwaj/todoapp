const express = require('express');
const router = express.Router();
const appConfig = require("./../../config/appConfig")
const auth = require('./../middlewares/auth')
const todoController = require('./../controllers/totoController')



let setRouter = (app) => {
  console.log('here1');

  let baseUrl = `${appConfig.apiVersion}/todo`;
  console.log('inside todo route');
  app.post(`${baseUrl}/addTodo`, auth.isAuthorized, todoController.addTodoItem);


  /**
   * @apiGroup Todo
   * @apiVersion 1.0.0
   * @api {post} /api/v1/todo/addTodo  Adding a new Todo.
   * @apiParam {string} Authorization Authorization of the user. (body) (required)
   * @apiParam {string} userId userId of the user.  (body) (required)
   * @apiParam {string} toDostatus toDostatus of the friends.  (body) 
   * @apiParam {string} name name of the todo list.  (body) (required)
   * @apiParam {string} todoId Todo id of the todo item.  (body) 
   * @apiParam {array} subToDoItems subToDoItems of the user.  (body) 
   * @apiParam {string} status status of the friend.  (body) 
   * @apiParam {array} history history of the todo.  (body)    
   *
   * @apiSuccess {object} myResponse shows error status, message, http status code, result.
   * 
   * @apiSuccessExample {object} Success-Response:
   
   {
  "error": false,
  "message": "todo item created",
  "status": 200,
  "data": {
      "name": "morning walk",
      "history": [
          "NA"
      ],
      "_id": "5c6ede876a323842b480e0ed",
      "todoId": "QknwFNN38",
      "userId": "wQMNLE1JK",
      "status": "ACCEPTED",
      "subToDoItems": [],
      "createdOn": "2019-02-21T17:23:19.955Z",
      "__v": 0
  }
}


           

   * @apiErrorExample {json} Error-Response:
 *
 * {
  "error": true,
  "message": "Failed to add new todo item",
  "status": 500,
  "data": null
}

  */

  //get
  app.get(`${baseUrl}/:userId/getTodo`, auth.isAuthorized, todoController.getAllTodo);

  /**
     * @apiGroup Todo
     * @apiVersion  1.0.0
     * @api {get} /api/v1/todo/:userId/getTodo get todo list.
     * @apiParam {string} Authorization Authorization of the friends. (body) (required)
     * @apiParam {string} userId userId of the friends.  (body) (required)
     *
     * @apiSuccess {object} myResponse shows error status, message, http status code, result.
     * 
     * @apiSuccessExample {object} Success-Response:
     
       {
    "error": false,
    "message": "User todo Details Found",
    "status": 200,
    "data": [
        {
            "name": "morning walk",
            "history": [
               "created by happy"
            ],
            "todoId": "oovYCI0RX",
            "userId": "wQMNLE1JK",
            "status": "ACCEPTED",
            "subToDoItems": [],
            "createdOn": "2019-02-21T17:22:38.836Z"
        
    ]
}

             

     * @apiErrorExample {json} Error-Response:
	 *
	 * {
    "error": true,
    "message": "No item Found",
    "status": 404,
    "data": null
}

    */

  //delete
  app.post(`${baseUrl}/:todoId/deleteTodo`, auth.isAuthorized, todoController.deleteTodo);
  /**
    * @apiGroup Todo
    * @apiVersion  1.0.0
    * @api {post} /api/v1/todo/:todoId/deleteTodo to delete Todo item.
    * @apiParam {string} Authorization Authorization of the friends. (body) (required)
    * @apiParam {string} todoId todoId of the item.  (body) (required)
    
    *
    * @apiSuccess {object} myResponse shows error status, message, http status code, result.
    * 
    * @apiSuccessExample {object} Success-Response:
    
   {
   "error": false,
   "message": "Todo deleted successfully",
   "status": 200,
   "data": {
       "n": 0,
       "ok": 1,
       "deletedCount": 0
   }
}


            

    * @apiErrorExample {json} Error-Response:
  *
  * {
     "error": true,
     "message": "No Result Found",
     "status": 404,
     "data": null
    }
   */


  //update list
  app.put(`${baseUrl}/updateTodo`, auth.isAuthorized, todoController.updateTodo);

  /**
    * @apiGroup Todo
    * @apiVersion  1.0.0
    * @api {put} /api/v1/todo/updateTodo to update the todo.
    *
     * @apiParam {string} Authorization Authorization of the user. (body) (required)
    * @apiParam {string} userId userId of the user.  (body) (required)
    * @apiParam {string} toDostatus toDostatus of the friends.  (body) 
    * @apiParam {string} name name of the todo list.  (body) (required)
    * @apiParam {string} todoId Todo id of the todo item.  (body) 
    * @apiParam {array} subToDoItems subToDoItems of the user.  (body) 
    * @apiParam {string} status status of the friend.  (body) 
    * @apiParam {array} history history of the todo.  (body)  
    *
    * @apiSuccess {object} myResponse shows error status, message, http status code, result.
    * 
    * @apiSuccessExample {object} Success-Response:
    
    {
   "error": false,
   "message": "details updated",
   "status": 200,
   "data": {
       "n": 0,
       "nModified": 0,
       "ok": 1
   }
}


    * @apiErrorExample {json} Error-Response:
  *
  * {
     "error": true,
     "message": "No Result Found",
     "status": 404,
     "data": null
    }
   */

  // //delete list
  // app.post(`${baseUrl}/allList/delete`,auth.isAuthorized,todoController.deleteAllListsOfUser)









}//setRouter


module.exports = {
  setRouter: setRouter
}