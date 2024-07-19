const { mongoose } = require("mongoose");

const adAboutSchema =  mongoose.Schema(
    {
        picture:{type: String, required:[ true, "picture is required"]},
        type:{type: String, required:[ true, "type is required"]}

},
 {timeStamps: true})
const adAboutModel = mongoose.model ("adAboutModel", adAboutSchema)
module.exports = adAboutModel