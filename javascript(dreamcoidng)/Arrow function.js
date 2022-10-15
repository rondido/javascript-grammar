// function
// - fundamental building block in the program
// - subprogram can be used multiple times
// - performs a task or calculates a value

function changeName(obj) {
  obj.name = "coder";
}

const park = { name: "park" };
changeName(park);
console.log(park);
// object는 레퍼런스로 전달되기 때문에 함수 안에서 변경된 사항이 그대로 메모리에 적용
