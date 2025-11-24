class Applicant {
    constructor(
        public readonly id: number,
        private readonly skillRate = 100 * Math.random(),
        private readonly luckRate = 100 * Math.random()
    ) {}

    getSkillRate(): number { return this.skillRate; }
    getLuckRate(): number { return this.luckRate; }
}

export { Applicant };