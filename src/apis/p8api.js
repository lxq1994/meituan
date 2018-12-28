import {AJAXURL} from "../commons/urls"
import {index} from "../commons/urls";
import {food} from "../commons/urls";
export default {
  getShopData(cb){

    fetch(AJAXURL).then(res=>{
      res.json().then(data=>{
        cb(data)
      })
    })
  },
  getIndex(cb){
    fetch(index).then(res=>{
      res.json().then(data=>{
        cb(data)
      })
    })
  },
  getFood(cb){
    fetch(food).then(res=>{
      res.json().then(data=>{
        cb(data)
      })
    })
  }
}
