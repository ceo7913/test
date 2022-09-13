function isPrime(n) {
    let answer = true;
    for (let i = 2; i < n; i++) {
      if (n % i == 0) {
        answer = false;
        break;
      }
    }
    return answer;
  }
  
  console.log(isPrime(31));
  console.log(isPrime(10));