export const REMOVE_FEATURE = "REMOVE_FEATURE";
export const BUY_ITEM = "BUY_ITEM";

export const removeFeature = (feature) => {
    console.log(feature)
    return {
        type: "REMOVE_FEATURE",
        payload: feature
    }
}

export const buyItem = (buy) => {
    console.log(buy)
    return{
        type: "BUY_ITEM",
        payload: buy
    }
}