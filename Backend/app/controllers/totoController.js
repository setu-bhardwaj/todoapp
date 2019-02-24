const mongoose = require('mongoose');
const shortid = require('shortid');
const time = require('./../libs/timeLib');
const passwordLib = require('./../libs/generatePasswordLib');
const response = require('./../libs/responseLib')
const logger = require('./../libs/loggerLib');
const validateInput = require('../libs/paramsValidationLib')
const check = require('../libs/checkLib')
const token = require('../libs/tokenLib')
const AuthModel = mongoose.model('Auth')

const TodoModel = mongoose.model('todo');
const socketLib = require('../libs/socketLib')


/**
 * function to add the todo item.
 */
let addTodoItem = (req, res) => {

    var today = Date.now()
    let todoId = shortid.generate();

    let newTodo = new TodoModel({

        todoId: todoId,
        name: req.body.name,
        userId: req.body.userId,
        status: req.body.status,
        todostatus: req.body.todostatus,
        subToDoItems: req.body.subToDoItems,
        history: req.body.history,
        createdOn: today
    }) // end new todo model

    newTodo.save((err, result) => {
        if (err) {
            console.log(err)
            logger.error(err.message, 'todo controller: addTodoItem', 10)
            let apiResponse = response.generate(true, 'Failed to add new todo item', 500, null)
            res.send(apiResponse)
        } else {
            //notification
            //   socketLib.newToDo(newTodo);
            logger.info('item created', 'User Controller: addtodo')
            let apiResponse = response.generate(false, 'todo item created', 200, result)
            res.send(apiResponse);

        }
    }) // end new todo save
}



let getAllTodo = (req, res) => {
    TodoModel.find({ userId: req.params.userId }) //created as req.params for api testing
        .select(' -__v -_id')
        .lean()
        .exec((err, result) => {
            if (err) {
                console.log(err)
                logger.error(err.message, 'todo Controller: getAllTodo', 10)
                let apiResponse = response.generate(true, 'Failed To Find todo Details', 500, null)
                res.send(apiResponse)
            } else if (check.isEmpty(result)) {
                logger.info('No User Found', 'todo Controller: getalltodo')
                let apiResponse = response.generate(true, 'No item Found', 404, null)
                res.send(apiResponse)
            } else {
                let apiResponse = response.generate(false, 'User todo Details Found', 200, result)
                res.send(apiResponse)
            }
        })
}// end get all list

let deleteTodo = (req, res) => {
    TodoModel.deleteOne({ todoId: req.params.todoId })  //api tested params     
        .exec((err, result) => {
            if (err) {
                logger.error(err.message, 'list controller', 10)
                let apiResponse = response.generate(true, 'unable to delete', 400, null);
                res.send(apiResponse)
            } else if (check.isEmpty(result)) {
                logger.info('list id invalid', 'list controller', 5)
                let apiResponse = response.generate(true, 'Todo is invalid', 404, null);
                res.send(apiResponse)
            }
            else {
                logger.info('list deleted', 'list controller', 5)
                let apiResponse = response.generate(false, 'Todo deleted successfully', 200, result);
                res.send(apiResponse)
            }
        })
} // end of delete list

let updateTodo = (req, res) => {
    let options = req.body;
    TodoModel.update({ todoId: req.body.todoId }, options)
        .exec((err, result) => {
            if (err) {
                logger.error(err.message, 'list controller', 10)
                let apiResponse = response.generate(true, 'unable to update details', 400, null);
                res.send(apiResponse)
            } else {
                logger.info('list updated', 'list controller', 5)
                // socketLib.updateTodo(req.body);
                let apiResponse = response.generate(false, 'details updated', 200, result);
                res.send(apiResponse)

            }
        })
} // end of update list using todo id

// let updateAllListsOfUser = (req,res) =>{

//     let options = req.body.TodoModel

//     TodoModel.update({userId:req.body.userId},options , {multi:true}).exec((err,result)=>{
//     if(err){
//         logger.error(err.message, 'list controller',10)
//         let apiResponse = response.generate(true,'unable to update details',400,null);
//         res.send(apiResponse)
//     }else{
//         logger.info('list updated','list controller',5)
//         let apiResponse = response.generate(false,'details updated',200,result);
//         res.send(apiResponse)

//     }
// })

// } //  end of update all lists of user

// let deleteAllListsOfUser = (req,res) =>{

//     TodoModel.deleteMany({userId:req.body.userId})
//     .exec((err,result)=>{

//         if(err){
//             logger.error(err.message, 'list controller',10)
//             let apiResponse = response.generate(true,'unable to delete details',400,null);
//         res.send(apiResponse)
//         }else{
//             logger.info('list deleted','user controller',5)
//         let apiResponse = response.generate(false,'all lists deleted',200,result);
//         res.send(apiResponse)
//         }

//     })

// }//delete all lists

module.exports = {

    addTodoItem: addTodoItem,
    getAllTodo: getAllTodo,

    updateTodo: updateTodo,
    // updateAllListsOfUser:updateAllListsOfUser,
    deleteTodo: deleteTodo,
    // deleteAllListsOfUser:deleteAllListsOfUser

}// end exports