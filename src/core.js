export function generateID() {
  return Math.random().toString(36).substring(2, 12) + Math.random().toString(36).substring(2, 12);
}

export function generateUniqueID(arr) {
  let id = generateID();
  while(arr.includes(id)) {
    id = generateID();
  }
  return id;
}

export function changeIDOrder(arr, prev_index, new_index) {
  let newArr = arr.slice(0)
  newArr.splice(new_index, 0, newArr.splice(prev_index, 1)[0])
  return newArr
}

export function generateRandomHex() {
  function HslToRgb(h, s, l) {
  	var m1, m2, hue;
  	var r, g, b
  	s /=100;
  	l /= 100;
  	if (s == 0)
  		r = g = b = (l * 255);
  	else {
  		if (l <= 0.5)
  			m2 = l * (s + 1);
  		else
  			m2 = l + s - l * s;
  		m1 = l * 2 - m2;
  		hue = h / 360;
  		r = HueToRgb(m1, m2, hue + 1/3);
  		g = HueToRgb(m1, m2, hue);
  		b = HueToRgb(m1, m2, hue - 1/3);
  	}
  	return [Math.round(r), Math.round(g), Math.round(b)];
  }

  function HueToRgb(m1, m2, hue) {
  	var v;
  	if (hue < 0)
  		hue += 1;
  	else if (hue > 1)
  		hue -= 1;

  	if (6 * hue < 1)
  		v = m1 + (m2 - m1) * hue * 6;
  	else if (2 * hue < 1)
  		v = m2;
  	else if (3 * hue < 2)
  		v = m1 + (m2 - m1) * (2/3 - hue) * 6;
  	else
  		v = m1;

  	return 255 * v;
  }

  let h = Math.round(Math.random() * (359 - 1) + 1),
      s = Math.round(Math.random() * (95 - 80) + 80),
      l = Math.round(Math.random() * (90 - 70) + 70)

  let rgb = HslToRgb(h, s, l)

  return "#" + ((1 << 24) + (rgb[0] << 16) + (rgb[1] << 8) + rgb[2]).toString(16).slice(1);
}
