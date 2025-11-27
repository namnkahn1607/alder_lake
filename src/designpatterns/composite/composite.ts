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

class Leaf extends Component {
    operation(): string {
        return 'Leaf';
    }
}

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

// Client code
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
branch1.add(new Leaf());

tree.add(branch1);
tree.add(branch2);

console.log('[Client] Now I got a Composite tree');
clientCode(tree);

console.log('');

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