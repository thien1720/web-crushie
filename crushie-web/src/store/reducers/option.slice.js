import { createSlice } from "@reduxjs/toolkit";


const initialState = []

const heartCard = createSlice({
    name: "filter",
    initialState,
    reducers: {
        addHeart(state, { payload }){

            const filHeart = state.find((i) => i.id === payload.id)

            if(filHeart){
                return state
            }else{
                return [...state , payload]
            }
        },
        removeHeart(state, { payload }){
            return state.filter(iteam =>iteam.id != payload.id)
        }
    }

})

export const {addHeart, removeHeart} = heartCard.actions

const heartReducer = heartCard.reducer;

export default heartReducer