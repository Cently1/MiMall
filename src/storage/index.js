/**
 * Storage封装
 */
const Storage_key = "mall";
export default {
  //存储值
  // storage.setItem('a',1);
  // storage.setItem('user',{a:1});
  //storage.setItem('abc',{a:1},'user');
  setItem(key, value, module_name) {
    if (module_name) {
      let val = this.getItem(module_name);
      val[key] = value;
      this.setItem(module_name, val);
    } else {
      let val = this.getStorage();
      val[key] = value; //hh:100  user:{a:1}
      window.sessionStorage.setItem(Storage_key, JSON.stringify(val));
    }
  },
  //获取某个模块下面的属性user下面的userName
  //user: {userName: "cently", age: "18", sex: "女"}
  getItem(key, module_name) {
    if (module_name) {
      let val = this.getItem(module_name);
      if (val) return val[key];
    }
    return this.getStorage()[key];
  },
  getStorage() {
    return JSON.parse(window.sessionStorage.getItem(Storage_key) || "{}");
  },
  clear(key, module_name) {
    let val = this.getStorage();
    if (module_name) {
        if(!val[module_name]) return ;
      delete val[module_name][key];
      console.log(val);
      
    } else {
      delete val[key];
    }
    window.sessionStorage.getItem(Storage_key) || "{}";
  }
};
