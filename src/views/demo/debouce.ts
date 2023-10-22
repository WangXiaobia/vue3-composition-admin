/*
 * @Description: 防抖全局
 * @Author: WXB
 * @Date: 2020-12-08 14:26:07
 * @LastEditors: ZY
 * @LastEditTime: 2020-12-08 15:21:33
 */

export function debounce(
  fn: Function,
  delay
) {
  let timerID = null
  //   let count:number = 0;
  return function(this, ...arg) {
    if (timerID) {
      clearTimeout(timerID)
    }
    timerID = setTimeout(() => {
      console.log(this, arg, '这到底是什么')
      fn.apply(this, arg)
    }, delay)
    console.log(delay, '这个值是唯一不变的吗')
  }
}

export function throttle(
  fn: Function,
  delay
) {
  let timerID = null
  //   let count:number = 0;
  return function(this, ...arg) {
    if (timerID) {
      return
    }
    timerID = setTimeout(() => {
      console.log(this, arg, '这到底是什么')
      fn.apply(this, arg)
    }, delay)
    console.log(delay, '这个值是唯一不变的吗')
  }
}
