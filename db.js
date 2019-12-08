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

//Fetch all items from database
export const dbGetAll = async (table) => {
  
  const param = {
    TableName: table
  }

  let result = await DDB.scan(param).promise()

  return result
}

//core call: dynamodb get item
export const _getItem = async params => {
  //TODO: fetch single item
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

