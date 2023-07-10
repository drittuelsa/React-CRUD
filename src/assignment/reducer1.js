

var initialState ={ 
    Data :[
    //   {
    //    id: '1',
    //     first:'Drittu',
    //     Midname:'Elsa',
    //     Lastname:'Sebastian'
    // },
    // {
    //   id:'2',
    //     first:'Drinu',
    //     Midname:'Maria',
    //     Lastname:'Sebastian'
    // },
    // {
    //   id:'3',
    //     first:'Miguel',
    //     Midname:'Mathew',
    //     Lastname:'Marshal'
    // },
    ] ,    
}

export function CustomReducer1(state = initialState, action){

// switch(action.type)
//     {//using var newState = {...state} doesnt give result
//         case "AddData" :
//      return {...state,
//          Data:[...state.Data, action.payload]  //[Data before, new Data]
//      }
//      default:
//     return state;
//     }
 //OR
    if(action.type == "AddData"){
        return {...state,
              Data:[...state.Data, action.payload]  //[Data before, new Data]
                } 
    }
   // return state; //if only AddData was there, give final return along this

    if(action.type == "DeleteData"){

        return {state, 
             Data : state.Data.filter((item) => item.id !== action.payload) //if we put [] for Data, we dont get result
        }
              }        
   // return state;
    
    if(action.type == "EditData"){ 
     return{state, Data: state.Data.map((item) =>
      item.id === action.payload.id ?
        action.payload : item)
            }
        }
   return state;
}