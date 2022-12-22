const jobsModel = require("../models/jobsModel")
const interviewModel = require("../models/interviewModel")


const createJob = async (req, res) => {

    let data = req.body

    const createJob = await jobsModel.create(data)

    return res.status(201).send({ data: createJob })
}


const createInterview = async (req, res) => {

    let data = req.body

    const createInterview = await interviewModel.create(data)

    return res.status(201).send({ data: createInterview })
}


const getByStudent = async (req, res) => {
    let studentId = req.param

    // we can do it directly by polate method and selected fields can see the required response
    let interview = await interviewModel.findOne({ student: studentId }).populate({ path: "jobs", select: { skills: 1, role: 1 } })


    let jobId = interview.jobs

    let job = await jobsModel.findById({ _id: jobId })

    // we can store it in object and send selected fields in the response
    let InterviewDetails = {
        interviewId: interview._id,
        jobs: jobId,
        skills: job.skills,
        skills: job.roles
    }

    return res.status(200).send({ data: InterviewDetails })
}



const getByInterviewer = async (req, res) => {
    let InterviewId = req.param

    // same as above 
    let interview = await interviewModel.findOne({ interview: InterviewId }).populate({ path: "jobs", select: { skills: 1, role: 1 } })

    let InterviewDetails = {
        interviewId: interview._id,
        jobs: jobId,
        skills: job.skills,
        skills: job.roles
    }

    return res.status(200).send({ data: InterviewDetails })
}

module.exports = {
    createJob,
    createInterview,
    getByStudent,
    getByInterviewer

}