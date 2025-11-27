import type { SystemNode } from './system_node.ts';

/* LEAF */
class File implements SystemNode {
    constructor(
        private name: string,
        private readonly size: number 
    ) {}

    isLeaf(): boolean {
        return true;
    }

    setName(name: string): void {
        this.name = name;
    }

    getName(): string { return this.name; }
    getSize(): number { return this.size; }
}

export { File };