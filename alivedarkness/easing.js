function easeInQuad(x) {
    return x * x;
  }

function easeOutQuad(x) {
    return 1 - (1-x) * (1-x);
  }
  
function easeInOutQuad(x) {
    return x < 0.5 ? 2 * x * x : 1 - pow(-2 * x + 2, 2) / 2;
}

function easeInCubic(x) {
  return x * x * x;
}

function easeOutCubic(x) {
  return 1 - pow(1 - x, 3);
}

function easeInOutCubic(x) {
  return x < 0.5 ? 4 * x * x * x : 1 - pow(-2 * x + 2, 3) / 2;
}

function easeInQuart(x) {
  return x * x * x * x;
}

function easeOutQuart(x) {
  return 1 - pow(1 - x, 4);
}

function easeInOutQuart(x) {
  return x < 0.5 ? 8 * x * x * x * x : 1 - pow(-2 * x + 2, 4) / 2;
}

function easeInQuint(x) {
  return x * x * x * x * x;
}

function easeOutQuint(x) {
  return 1 - pow(1 - x, 5);
}

function easeInOutQuint(x) {
  return x < 0.5 ? 16 * x * x * x * x * x : 1 - pow(-2 * x + 2, 5) / 2;
}

function easeInSine(x) {
  return 1 - cos((x * 180) / 2);
}

function easeOutSine(x) {
  return sin((x * 180) / 2);
}

function easeInOutSine(x) {
  return -(cos(180 * x) - 1) / 2;
}

function easeOutBounce(x) {
  const n1 = 7.5625;
  const d1 = 2.75;

  if (x < 1 / d1) {
      return n1 * x * x;
  } else if (x < 2 / d1) {
      return n1 * (x -= 1.5 / d1) * x + 0.75;
  } else if (x < 2.5 / d1) {
      return n1 * (x -= 2.25 / d1) * x + 0.9375;
  } else {
      return n1 * (x -= 2.625 / d1) * x + 0.984375;
  }
}

function easeInBounce(x) {
  return 1 - easeOutBounce(1 - x);
}

function easeInOutBounce(x) {
  return x < 0.5 ? (1 - easeOutBounce(1 - 2 * x)) / 2 : (1 + easeOutBounce(2 * x - 1)) / 2;
}