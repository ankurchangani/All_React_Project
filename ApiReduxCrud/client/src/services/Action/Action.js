

import axios from "axios";
import generateUniqueId from "generate-unique-id";

export const SingleRecord = (data) => {

    return {
        type: "SingleRecord",
        payload: data
    }

}


export const UpdateRecord = (data) => {

    return {
        type: "UpdateRecord",
        payload: data
    }

}


export const GetData = (data) => {
    return {
        type: "GetData",
        payload: data
    }
}


export const SetError = (error) => {
    return {
        type: "SetError",
        payload: error
    };
};

export const AddMovoieDataAsync = (data) => {

    return (dispatch) => {
        
       data.id = generateUniqueId({
                length: 4,
                useLetters: false
            })

        axios.post('http://localhost:3002/Movies', data).then((res) => {
            console.log("res", res);

            dispatch(GetDataAsync(res.data))

        }).catch((err) => {
            console.log("err", err);
        })

    }
}
export const GetDataAsync = () => {
    return (dispatch) => {
        axios.get('http://localhost:3002/Movies')
            .then((res) => {
                dispatch(GetData(res.data));
            })
            .catch((err) => {
                console.log("Error fetching movies:", err);
                dispatch(SetError("Failed to fetch movies. Please try again later."));
            });
    };
};


export const singledataAsync = (id) =>{
    return (dispatch) =>{

        
        axios.get(`http://localhost:3002/Movies/${id}`).then((res)=>{
            console.log("res",res);
            dispatch(SingleRecord(res.data))
        }).catch((err) => {
            console.log("err", err);
        })

    }
}

export const DeleteAsync = (id) => {
    return (dispatch) => {
        axios.delete(`http://localhost:3002/Movies/${id}`).then((res) => {
            console.log("res", res.data);
            dispatch(GetDataAsync())
        }).catch((err) => {
            console.log("err", err);
        })
    }
}

export const UpdateRecordAsync = (id, data) => {
    return (dispatch) => {
        console.log("Dispatching update for ID:", id, "with data:", data);
        axios.put(`http://localhost:3002/Movies/${id}`, data)
            .then((res) => {
                console.log("Updated Movie:", res.data);
                dispatch(GetDataAsync());
            })
            .catch((err) => {
                console.log("Error updating movie:", err);
            });
    };
};

