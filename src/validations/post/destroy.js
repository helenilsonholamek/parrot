const { validate, Joi } =  require ('express-validation')

module.exports = validate({
  params: Joi.object({
    user_id: Joi.number().required(),
  }),
})
