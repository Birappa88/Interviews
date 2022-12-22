const mongoose = require("mongoose");
const ObjectId = mongoose.Schema.Types.ObjectId

//=======================----------------->{ Interview Schema }<-------------=======================================//

const jobsSchema = new mongoose.Schema(
    {
        skills: { type: String, required: true },
        role:  { type: String, required: true }
    },
    { timestamps: true }
);


//=======================----------------->{ Export }<-------------=======================================//

module.exports = mongoose.model("jobs", jobsSchema)