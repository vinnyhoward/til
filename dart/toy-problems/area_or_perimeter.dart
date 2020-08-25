// Area or Perimeter

// You are given the length and width of a 4-sided polygon. The polygon can either be a rectangle or a square.
// If it is a square, return its area. If it is a rectangle, return its perimeter.

// area_or_perimeter(6, 10) --> 32
// area_or_perimeter(4, 4) --> 16

int area_or_perimeter(int l, int w) => l == w ? l * w : l + l + w + w;

void main() {
  print(area_or_perimeter(6, 10)); // --> 32
  print(area_or_perimeter(4, 4)); // --> 16
}
