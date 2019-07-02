const validator = {  
  isPhone:(data) => {
    let pattern = /^(1[3456789])\d{9}$/;    
    if (data == "") return false;
    return pattern.test(data);
  },
  isPassword:(data) => {
    let pattern = /^(\w){6,12}$/;    
    if (data == "") return false;
    return pattern.test(data);
  },
  isIdCard: function (data) {
    var str = data;
    if (str == "") return false;
    var len = str.length;
    if (len == 15) {
        var reg = /^(\d{6})()?(\d{2})(\d{2})(\d{2})(\d{3})$/;
    } else if (len == 18) {
        var reg = /^(\d{6})()?(\d{4})(\d{2})(\d{2})(\d{3})(\d|X|x)$/;
    } else {
        return false;
    }
    
    if (!reg.test(str)) return false;

    var part = str.match(reg);
    var year = (len == 15) ? ("19" + part[3]) : part[3];
    var date = new Date(year + "/" + part[4] + "/" + part[5]);
    if ((date.getFullYear() != year) ||
       ((date.getMonth() + 1) != (part[4] | 0)) ||
       (date.getDate() != (part[5] | 0)))
        return false;

    if (len == 15) return true;
    var wi = [7, 9, 10, 5, 8, 4, 2, 1, 6, 3, 7, 9, 10, 5, 8, 4, 2];
    var lastcode = "10X98765432";
    var sum = 0;
    for (var i = 0; i < 17; i++) {
        sum += parseInt(str.charAt(i)) * wi[i];
    }
    return (lastcode.charAt(sum % 11) == part[7].toUpperCase());
  },
  isBankNo(data){
    return /^\d{19}$/.test(data)||/^\d{16}$/.test(data);  
  },
  isPositiveNum(data){
      return /^[+]{0,1}(\d+)$|^[+]{0,1}(\d+\.\d{0,2})$/.test(data)
  },
  isInt(data){
      return /^[+]{0,1}(\d+)$/.test(data)
  }
} 
  
export default validator