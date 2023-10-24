//Given a list of directions to spin, "left" or "right", return an integer of how many full 360° rotations were made.
//Note that each word in the array counts as a 90° rotation in that direction.

function spinAround(turns) {
	let counterTurns

	const arr = turns.reduce(function (preVal, index) {
		if (index == 'right') {
			return preVal + 90
		}

		if (index == 'left') {
			return preVal - 90
		}
	}, 0)

	const number = Math.abs(arr)

	if (number < 360) {
		return 0
	}
	else {
		return counterTurns = Math.trunc(number / 360)
	}

}