import Joi from "joi";

export default class Validation {
    static async RegisterValidator(data) {
        return await Joi.object({
            name: Joi.string().min(2).max(32).required().trim().error(new Error("Name is involied")),
            email: Joi.string().required().error(new Error("Email is involied")),
            password: Joi.string().required().min(6).error(new Error("Password is involied"))
        }).validateAsync(data)
    }

    static async LoginValidator(data) {
        return await Joi.object({
            email: Joi.string().required().error(new Error("Email is involied")),
            password: Joi.string().required().min(6).error(new Error("Password is involied"))
        }).validateAsync(data)
    }
}