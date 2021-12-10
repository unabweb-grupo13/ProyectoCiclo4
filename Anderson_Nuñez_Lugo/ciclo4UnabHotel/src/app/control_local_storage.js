function getLocalStorage(key){
    try {
      return JSON.parse(localStorage.getItem(key));
    } catch (e) {
      console.log(e)
    }
  }
function setLocalStorage(key, data){
    try {
      localStorage.setItem(key,JSON.stringify(data));
    } catch (e) {
      console.log(e);
    }
  }
function alertar(){
  console.log("funciono");
}