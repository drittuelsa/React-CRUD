

export function Add(Data){
    return{
        type: "AddData" ,
       payload : Data
    }
}

export function Delete(id){
    return{
        type: "DeleteData" ,
       payload : id
    }
}

export function Edit(Data){
    return{
        type: "EditData" ,
       payload :Data
    }
}
