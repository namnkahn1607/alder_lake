class _File {
    constructor(
        public path: string
    ) {}

    setPath(path: string) { this.path = path; }
    getPath(): string { return this.path; }
}

export { _File };