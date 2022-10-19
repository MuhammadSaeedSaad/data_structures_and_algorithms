const n1 = new Node(9);
const t1 = new Tree(n1);

function setup() {
    createCanvas(600, 600);
    console.log(t1);
    for (let i = 0; i < 10; i++) {
        t1.addValue(floor(random(0, 100)));
    }
    t1.traverse();
    const result = t1.search(19);
    console.log(result);
}

// function draw() {
//     background(0);
// }