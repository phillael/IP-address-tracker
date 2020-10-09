// Questions for mark 9/17/20

//////// codingame //////////

// JR

// while (true)
// 	  while what is true?? When/how does it become false?

// set index to -1
// 	  duck typing, interface programming?

// -what is the readLine() doing? where is the input coming from?
// 	  it returns a string so use parseInt to turn it into a number?

// conditionals breed complexity
// 	  should I avoid using conditionals whenever possible?
// 	  too many conditionals make me look like an amateur?

// Mid

// function Mountain(index, height) {
// 	  this.index = index
// 	  this.height = height
// 	  return this
// }

// 	why do you have to return this? Can’t you already get the height and index without that line of code?

print(
  [...Array(8)]
    .map(() => parseInt(readline()))
    .reduce((acc, val, idx, src) => {
      return (val > src[acc] ? idx : acc)
    }, 0)
);


[7 8 9 6 5 4 3 2]

1st
acc = 0
val = 7
idx = 0
src = [7 8 9 6 5 4 3 2]
(7 > 7 ? 0 : 0)

2nd
acc = 0
val = 8
idx = 1
src = [7 8 9 6 5 4 3 2]
(8 > 7 ? 1 : 0)

3rd
acc = 1
val = 9
idx = 2
src = [7 8 9 6 5 4 3 2]
(9 > 8 ? 2 : 1)

4th
acc = 2
val = 6
idx = 3
src = [7 8 9 6 5 4 3 2]
(6 > 9 ? 3 : 2)

5th
acc = 2
val = 5
idx = 4
src = [7 8 9 6 5 4 3 2]
(5 > 9 ? 4 : 2)

6th
acc = 1
val = 9
idx = 2
src = [7 8 9 6 5 4 3 2]
(9 > 8 ? 2 : 1)

7th
acc = 1
val = 9
idx = 2
src = [7 8 9 6 5 4 3 2]
(9 > 8 ? 2 : 1)

8th
acc = 1
val = 9
idx = 2
src = [7 8 9 6 5 4 3 2]
(9 > 8 ? 2 : 1)


