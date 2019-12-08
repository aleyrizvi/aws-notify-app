import {DynamoDB} from 'aws-sdk'

let DDB = new DynamoDB.DocumentClient()

//save one item into dynamodb
export const dbPutItem = async (table, data) => {
  const param = {
    TableName: table,
    Item: data
  }

  return await _putItem(param)
}

//fetch one item into dynamodb
export const dbGetItem = async (table, data) => {
  //TODO: Fetch single Item
}

//delete one item into dynamodb
export const dbDeleteItemByID = async (table, ID) => {
  const param = {
    TableName: table,
    Key: {
      ID: ID
    }
  }

  return await _deleteItem(param)
}

//Fetch all items from database
export const dbGetAll = async (table) => {
  
  const param = {
    TableName: table
  }

  let result = await DDB.scan(param).promise()

  return result
}


export const dbCompleteItemByID = async (id) => {
    
  var params = {
    TableName:'notify-data',
    Key:{
        "ID": id,
    },
    UpdateExpression: "set completed = :status",
    ExpressionAttributeValues:{
      ":status":true,
    },
    ReturnValues:"UPDATED_NEW"
  };


  return await _updateItem(params)
}

//core call: dynamodb get item
export const _deleteItem = async params => {
  try {
    let response = await DDB.delete(params).promise()
    return response 
  } catch (error) {
    return false
  }
}

//core call: dynamodb put item
export const _putItem = async params => {
  
  try {
    await DDB.put(params).promise()
    return true  
  } catch (error) {
    return false
  }
  
  
}

//core call: dynamodb update item
export const _updateItem = async params => {
  
  try {
    return await DDB.update(params).promise()
  } 
  catch (error) {
    return false
  }
  
  
}
