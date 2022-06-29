import mongoose from "mongoose";


 /**  
    * To set the monog options.
    * returns the options 
*/
function getMongoOptions(){
    return '?readpreference=secondary';
}

 /**
     * To get the MONGO URI  
 */
function getMongoUri(){
    return `mongodb://${process.env.MONGO_BASE_URI}:${process.env.MONGO_PORT}/${process.env.MONGO_DB_NAME}${getMongoOptions()}`
}

export default getMongoUri;
