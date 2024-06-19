import _ from "lodash";


export const paginate = (data,pageNum,pagesize) => {
    
   const startIndex =(pageNum-1) * pagesize;

   return _(data)
   .slice(startIndex)
   .take(pagesize)
   .value();
};
