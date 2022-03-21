import axios from "axios";
import { actionType } from "./actionType";

const getFoods = (users) => ({
    type: actionType.GET_FOODS,
    payload: users
});
const AddFood = (users) => ({
    type: actionType.ADD_FOOD,
    payload: users
});
export const loadFoods = () => {
    return function (dispatch) {
        axios.get("http://localhost:5000/food").then((resp) => {
            console.log(resp);
            dispatch(getFoods(resp))
        }).catch((error) => console.error(error))
    }
}

export const addFood = (user) => {
    return function (dispatch) {
        axios.post("http://localhost:5000/food", user).then((resp) => {
            console.log(resp);
            dispatch(AddFood(resp))
        }).catch((error) => console.error(error))
    }
}