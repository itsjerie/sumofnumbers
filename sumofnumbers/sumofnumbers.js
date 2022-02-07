const testData = [1, 2, 3, 4];

function sumFor(data){
  let total = 0;
  for(const num of data){
    total += num;
  }
  return total;
}
console.log(sumFor(testData));

function sumWhile(data){
  let total = 0;
  let i =0;
  while(i< data.length){
    total += data[i];
    i++;
  }
  return total;
}
console.log(sumWhile(testData));

function sumRecursion(data){
  if(data.length === 0){
    return 0;
  }
  return sumRecursion(data.slice(1,data.length)) + data[0];
}
console.log(sumRecursion(testData));

function sumTheSimpleWay(data){
  return _.reduce(data, function(memo,num){return num+memo;},0);
}
console.log(sumTheSimpleWay(testData));