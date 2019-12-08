import {response} from './helpers/responseGenerator'
import {dbPutItem, dbGetAll} from './db'
import {randomID} from './helpers/utils'


export const putData = async (event, context) => {
  
  try {
    let Data = JSON.parse(event.body)
    Data.created_at = Math.round(Date.now()/1000)
    Data.completed = false
    Data.ID = randomID()

    //INITIATING DATABASE CALL
    await dbPutItem('notify-data', Data)
    
    //ALL IS WELL!
    return response(201, Data)

  } catch (error) {
    //Hmm, something went wrong. TODO: Catch error and log somewhere. Slack perhaps?

    return response(500, {
      "error": "Error occured, please contact support team."
    })
  }
};

export const getData = async (event, context) => {
  
  try {

    //INITIATING DATABASE CALL
    let result = await dbGetAll('notify-data')
    
    
    //ALL IS WELL!
    return response(200, result.Items)

  } catch (error) {
    //Hmm, something went wrong. TODO: Catch error and log somewhere. Slack perhaps?

    return response(500, {
      "error": "Error occured, please contact support team."
    })
  }
};