export const REMOVE_FEATURE = "REMOVE_FEATURE";
export const BUY_ITEM = "BUY_ITEM";

export const removeFeat = (rmvFeat) => {
    console.log(rmvFeat)
    return {
        type: "REMOVE_FEATURE",
        payload: rmvFeat
    }
}
export const buyItem = (buy) => {
    console.log(buy)
    return{
        type: "BUY_ITEM",
        payload: buy
    }
}