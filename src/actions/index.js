export const REMOVE_FEATURE = "REMOVE_FEATURE";
export const ADD_FEATURE = "ADD_FEATURE";
export const BUY_ITEM = "BUY_ITEM";

export const removeFeature = (rmvFeat) => {
    console.log(rmvFeat)
    return {
        type: "REMOVE_FEATURE",
        payload: rmvFeat
    }
}

export const addFeature = (addFeat) => {
    console.log(addFeat)
    return {
        type: "ADD_FEATURE",
        payload: addFeat
    }
}

export const buyItem = (buy) => {
    console.log(buy)
    return{
        type: "BUY_ITEM",
        payload: buy
    }
}