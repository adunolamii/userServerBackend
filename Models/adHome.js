const { mongoose } = require("mongoose");

const adHomeSchema =  mongoose.Schema(
    {
        picture:{type: String, required:[ true, "picture is required"]},
        type:{type: String, required:[ true, "type is required"]}

},
 {timeStamps: true})
const adHomeModel = mongoose.model ("adHomeModel", adHomeSchema)
module.exports = adHomeModel