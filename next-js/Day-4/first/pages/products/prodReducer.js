export const initialState ={
    product:[],
    loading :false,
    error:null

};
export const GET_REQUEST = 'GET_REQUEST';
export const GET_SUCCESS = 'GET_SUCCESS';
export const GET_FAILURE = 'GET_FAILURE';
export const ADD_PRODUCT = 'ADD_PRODUCT';
export const DELETE_PRODUCT = 'DELETE_PRODUCT';

export const prodReducer = (state=initialState,action)=>{
    switch(action.type){
        case GET_REQUEST:
            return{
                ...state,
                loading:true,
                error:null
            }
            case GET_SUCCESS:
                return{
                    product:action.payload,
                    loading:false,
                    error:null
                }
            case GET_FAILURE:
                return{
                    ...state,
                    loading:false,
                    error:action.payload
                }
        case ADD_PRODUCT:
            return{
                ...state,
                loading:false,
                product:[...state.product,action.payload]
            }
        case DELETE_PRODUCT:
            return{
                ...state,
                product:state.product.filter((prod)=>prod.id!=action.payload)
                
            }
        default:
            return state;

    }
}
