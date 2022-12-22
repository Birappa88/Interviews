const mongoose = require("mongoose");
const ObjectId = mongoose.Schema.Types.ObjectId

//=======================----------------->{ Interview Schema }<-------------=======================================//

const InterviewSchema = new mongoose.Schema(
    {
        student:       { type: String, required: true},
        interviewer: {  type: String, required: true },
        jobs:   { type: ObjectId,  ref : "jobs", required: true }
    },
    { timestamps: true }
);


//=======================----------------->{ Export }<-------------=======================================//

module.exports = mongoose.model("interview", InterviewSchema)