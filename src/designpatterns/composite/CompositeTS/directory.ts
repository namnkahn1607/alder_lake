import { type SystemNode } from './system_node.ts';
import { File } from './file.ts';

/* CONTAINER */
class Directory implements SystemNode {
    protected children = new Array<SystemNode>();

    constructor(public name: string) {}

    add(node: SystemNode): void {
        this.children.push(node);
    }

    remove(node: SystemNode): void {
        const nodeIdx = this.children.indexOf(node);
        this.children.splice(nodeIdx, 1);
    }

    isLeaf(): boolean {
        return false;
    }

    getSize(): number {
        let cost = 0;

        for (const child of this.children) {
            cost += child.getSize();
        }

        return cost;
    }

    // Client code
    public static main(): void {
        // 1. Create Leaves
        const file1 = new File("sys_config.json", 200);
        const file2 = new File("logo.png", 5000);
        const file3 = new File("todo.txt", 100);

        // 2. Create Composites
        const root = new Directory("root");
        const home = new Directory("home");
        const user = new Directory("user");

        // 3. Compose the Tree
        // Structural Logic: root -> home -> user -> [files]
        user.add(file1);
        user.add(file2);
        
        home.add(user);
        home.add(file3); // A file sitting next to a directory
        
        root.add(home);

        console.log(`Total System Size: ${root.getSize()} bytes`);
    }
}

Directory.main();