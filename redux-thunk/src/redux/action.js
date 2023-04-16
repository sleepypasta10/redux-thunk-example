import axios from "axios";


const fetchUser = () => {
    return async (dispatch, getState) => {
        dispatch({ type: "FETCH_DATA_REQUEST" })

        try {
            const res = await axios.get('https://jsonplaceholder.typicode.com/users');

            dispatch({
                type: "FETCH_DATA_SUCCESS",
                payload: res.data
            })
        } catch (error) {
            dispatch({type: "FETCH_DATA_FAIL", error})
        }

    }
}

// const fetchUser = () => {
//     return async (dispatch, getState) => {
//         const res = await axios.get('https://jsonplaceholder.typicode.com/users') 

//         dispatch({
//             type: "FETCH_DATA",
//             payload: res.data
//         })
//     }
// }


export default fetchUser;