/** COMPONENT (abstract/interface)
 * describe operations that are both common to simple
 * and complex element of the Tree.
 */
abstract class Component {
    protected parent!: Component | null;

    abstract operation(): string;

    add(component: Component): void {}

    remove(component: Component): void {}

    setParent(parent: Component | null) {
        this.parent = parent;
    }

    getParent(): Component | null {
        return this.parent;
    }

    isComposite(): boolean {
        return false;
    }
}

/** LEAF (concrete)
 * the lowest level element of a Tree that have no
 * sub-elements (children).
 */
class Leaf extends Component {
    operation(): string {
        return 'Leaf';
    }
}

/** COMPOSITE (concrete)
 * often refers to elements in a Tree that is not a Leaf,
 * they have sub-elements (children) to further delegates
 * the same work down to.
 */
class Composite extends Component {
    protected children = new Array<Component>();

    add(component: Component): void {
        this.children.push(component);
        component.setParent(this);
    }

    remove(component: Component): void {
        const componentIdx = this.children.indexOf(component);
        this.children.splice(componentIdx, 1);
        component.setParent(null);
    }

    isComposite(): boolean {
        return true;
    }

    operation(): string {
        const result = [];

        for (const component of this.children) {
            result.push(component.operation());
        }
        
        return `Branch(${result.join('+')})`;
    }
}

/* Client code works with Composite Tree thru the Interface */
const clientCode = (component: Component) => {
    console.log(`Result: ${component.operation()}`);
};

const simple = new Leaf();
console.log('[Client] I\'ve got a simple Component');
clientCode(simple);

console.log('');

const tree = new Composite();

const branch1 = new Composite();
branch1.add(new Leaf());
branch1.add(new Leaf());

const branch2 = new Composite();
branch2.add(new Leaf());

tree.add(branch1);
tree.add(branch2);

console.log('[Client] Now I got a Composite tree');
clientCode(tree);

console.log('');

// A more complex client function 
const clientCode2 = (component1: Component, component2: Component) => {
    if (component1.isComposite()) {
        component1.add(component2);
    }

    console.log(`Result: ${component1.operation()}`);
};

console.log(
    '[Client] I don\'t need to check the Components classes'
    + ' even when managing the tree:'
);
clientCode2(tree, simple);

/** Insight/Considerations:
 * 1. Composite pattern sees like world much as a Tree in DSA
 * - Each node can be a root node of a Subtree.
 * - Leaf nodes are considered no-children nodes.
 * 
 * 2. Containers (Composites) does not care about the concrete
 * classes of their children, therefore, they work thru the
 * Component Interface.
 * 
 * 3. The working stream of the Composite Tree is much like DFS
 * down a Tree in DSA. 
 */