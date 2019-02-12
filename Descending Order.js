function descendingOrder(n){

  var arr = n.toString().split('');

  var sortN = arr.sort(function(a, b){

    return b - a;
  })

  return (Number(sortN.join('')));
}

descendingOrder(123456789);
