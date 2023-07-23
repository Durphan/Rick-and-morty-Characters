import { Instance } from "./base.api"

const Endpoint = "character"


export const Characters = {
    getAll: function({page=1} : {page?:Number})  {
        return Instance.get(Endpoint, {params:{
            page
        }})
    },
    getById: function({id} : {id?:Number})  {
        return Instance.get(`${Endpoint}/${id}`)
    }
}