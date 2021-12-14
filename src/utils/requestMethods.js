import axios from 'axios'


const BaseUrl="http://localhost:3000/api/"

export const publicRequest= axios.create({
    baseURL:BaseUrl,
})

// const token=''

// export const userRequest=axios.create({
//     baseURL:BaseUrl,
//     headers:{token:`Bearer ${token}`}
// })