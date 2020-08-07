// String repeat

// Write a function called repeatString which repeats the given string src exactly count times.

// repeatString(6, "I") // "IIIIII"
// repeatString(5, "Hello") // "HelloHelloHelloHelloHello"

String repeatString(int n, String s) {
  var answer = [];

  for (int i = 0; i < n; i++) {
    answer.add(s);
  }

  return answer.join();
}

void main() {
  print(repeatString(6, 'hello'));
}
