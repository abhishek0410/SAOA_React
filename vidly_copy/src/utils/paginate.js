import _ from "lodash";

export default  function paginate(items,pageNumber,pageSize){
    console.log("In pagination , page clicked is ",pageNumber)
    const startIndex = (pageNumber-1)*pageSize;
    return _(items).slice(startIndex).take(pageSize).value(); 
 
}