import { isValidObjectId } from "mongoose";
import createHttpError from "http-errors";

export const isValidId = async (req, res, next) => { 
    const {studentId} = req.body 
    if (isValidObjectId(studentId)) {
        throw createHttpError(404, 'Bad Request')
    }
    next()
}