class TreeNode {
    val: number;
    left: TreeNode | null;
    right: TreeNode | null;
    constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
        this.val = val === undefined ? 0 : val;
        this.left = left === undefined ? null : left;
        this.right = right === undefined ? null : right;
    }
}

function createBinaryTree(descriptions: number[][]): TreeNode | null {
    const nodes = new Map<number, TreeNode>();
    const isChild = new Set<number>();

    for (const [parent, child, isLeft] of descriptions) {
        if (!nodes.has(parent)) nodes.set(parent, new TreeNode(parent));
        if (!nodes.has(child)) nodes.set(child, new TreeNode(child));

        isChild.add(child);
        const parentNode = nodes.get(parent)!;
        const childNode = nodes.get(child)!;
        if (isLeft === 1) parentNode.left = childNode;
        else parentNode.right = childNode;
    }

    for (const [val, node] of nodes) {
        if (!isChild.has(val)) return node;
    }

    return null;
}

function levelOrder(root: TreeNode | null): (number | null)[] {
    if (!root) return [];
    const result: (number | null)[] = [];
    const queue: (TreeNode | null)[] = [root];

    while (queue.length > 0) {
        const node = queue.shift()!;
        if (node) {
            result.push(node.val);
            queue.push(node.left);
            queue.push(node.right);
        } else {
            result.push(null);
        }
    }

    while (result.length > 0 && result[result.length - 1] === null) {
        result.pop();
    }

    return result;
}

console.log(
    levelOrder(
        createBinaryTree([
            [20, 15, 1],
            [20, 17, 0],
            [50, 20, 1],
            [50, 80, 0],
            [80, 19, 1],
        ])
    )
);
console.log(levelOrder(createBinaryTree([[1, 2, 1], [2, 3, 0], [3, 4, 1]])));
