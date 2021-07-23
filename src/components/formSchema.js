import * as yup from 'yup'


const schema = yup.object().shape({
    name: yup
        .string()
        .required('name is required')
        .min(2, "name must be at least 2 characters"),
    
    // size: yup
    //     .required('please select a size'),

    instructions: yup
        .string(),

    sausage: yup
        .boolean(),

    pepperoni: yup
        .boolean(),

    pineapple: yup
        .boolean(),

    olives: yup
        .boolean(),

    bacon: yup
        .boolean(),
    

    
})

export default schema