import Vue from "vue";

Vue.filter("formatDate", function (date) {
  let data = new Date(date);
  let day = data.getDate() < 10 ? `0${data.getDate()}` : data.getDate();
  let month =
    data.getMonth() + 1 < 10
      ? `0${data.getMonth() + 1}`
      : `${data.getMonth() + 1}`; //because month counted from 0
  let year = data.getFullYear();
  let firstLine = `${day}.${month}.${year}`;
  let secondLine = `${data.getHours()}:${data.getMinutes()}:${data.getSeconds()}`;
  return `${firstLine}\n${secondLine}`;
});