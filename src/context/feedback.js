import { createContext, useState } from "react";

export const fbContext = createContext();

const FbState = (props) => {
    const [feedBacks, setfeedBacks] = useState([])

    const host = 'http://localhost:5000'

    // GET all 
    const getAllFb = async () => {
        const response = await fetch(`${host}/api/all`)
        const json = await response.json()
        if (json.success) {
            setfeedBacks(json.res)
        }else {
            alert(json.message)
        }
    }
    // create feedback
    const createFb = async( rating , comment ) => {
        const response = await fetch(`${host}/api/createFeedBack`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ rating , comment })
        });
        const json = await response.json()

        if (json.success) {
            setfeedBacks(feedBacks.concat(json.res))

            // alert("Added Feedback successfully")
        } else {
            alert(json.error.errors.message)
        }
    }
    

    const deleteFb = async (id) => {
        // TODO: API CALL FOR DELETING A NOTE
        const response = await fetch(`${host}/api/deleteFeedBack/${id}`, {
            method: 'DELETE',
            headers: {
                headers: {
                    'Content-Type': 'application/json'
                }
            }
        });
        const json = await response.json()

        // * UPDATE THE FRONTEND NOTES
        if (json.success) {
            let fBs = feedBacks.filter((fb) => fb._id !== id)
            setfeedBacks(fBs)
            alert("Deleted note successfully", "success")
        } else {
            alert(json.message)
        }
    }
    return (
        <fbContext.Provider value={{ getAllFb, createFb, feedBacks }} >
            {props.children}
        </fbContext.Provider>
    )
}

export default FbState;