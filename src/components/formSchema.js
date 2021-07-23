import * as yup from 'yup'


const schema = yup.object().shape({
    name: yup
        .string()
        .required('name is required')
        .min(2, "name must be at least 2 characters"),
    // sauce: yup
        
    //     .required('sauce is required'),
    // size: yup
    //     .required('please select a size')

})

export default schema