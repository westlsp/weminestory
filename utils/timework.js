function timing(timer, obj_sum){
  var obj;
  for (var i = 0; i < obj_sum.length; i++) {
    obj = obj_sum[i]
    obj.second--;
    if (obj.second <= -1) {
      obj.second = 59
      obj.min--
      if (obj.min <= -1) {
        obj.min = 59
        obj.hour--
        if (obj.hour <= -1) {
          {
            obj.hour = 23
            obj.day--
            if (obj.day-- <= -1) {
              clearInterval(timer)
            }
          }
        }
      }
    }
    obj_sum[i] = obj
  }
  return obj_sum;
}

module.exports={
  timing:timing,
}