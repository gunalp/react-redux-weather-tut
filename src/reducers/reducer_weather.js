import {FETCH_WEATHER} from '../actions/index';

export default function(state=[],action){

  switch (action.type) {
    case FETCH_WEATHER:
      //return [action.payload.data]; bu şekilde yapma mevcut diziyi manipule ediyor. o yüzden tamamen yeni dizi oluşturmak lazım
      //return state.push(action.payload.data) buda olabilir ama aşağıdaki daha doğru
      //return state.concat([action.payload.data]);
      return [action.payload.data, ...state] //es6 yukarıdaki ile aynı [city,city,city] Not [city,[city,city]]
      break;
    default:

  }
  //console.log('Action Received: ',action);
  return state;
}
