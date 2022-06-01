const array = ['8:00', '14:00'];

const mapArrays = (array) => {
   array.splice
   (1, 0,
       '8:30','9:00',"9:30",'10:00','10:30','11:00','11:30','12:00','12:30','13:00','13:30');
   const res = [];
   for(let i = 0; i < array.length-1; i++){
      res.push({
          startTime: array[i],
          endTime:array[i +1 ]
      });
   };
   return res;
};
console.log(mapArrays(array));



















