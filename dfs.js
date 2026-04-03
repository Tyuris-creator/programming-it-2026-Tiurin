class Node {
  constructor(val) {
    this.value = val;
    this.left = null;
    this.right = null;
  }
}

const a = new Node("a");
const b = new Node("b");
const c = new Node("c");
const d = new Node("d");
const e = new Node("e");
const f = new Node("f");


a.left = b;
a.right = c;
b.left = d;
b.right = e;
c.right = f;
console.log(a)

const dfs = (root) => {
  const stack = [root];
  while (stack.length > 0) {
    const current = stack.pop()
    console.log(current.value)
    if (current.left !== null) stack.push(current.left) 
    if (current.right !== null) stack.push(current.right) 
  }
};

dfs(a)

const dfsR = (root) => {
    if (root === null) {
        return []
    }
    const left = dfsR(root.left)
    const right = dfsR(root.right)

    return [root.value, ... left, ...right]
}

const k = dfsR(a)
console.log(k)