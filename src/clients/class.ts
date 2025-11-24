import { Applicant } from './applicant.ts';

class Class {
    private readonly applicants: Array<Applicant>;

    constructor(
        numOfApplicants: number,
        public graduateSlots: number,
        public readonly skillScale: number,
        public readonly luckScale: number
    ) {
        this.applicants = this.generateApplicants(numOfApplicants);
    }

    private generateApplicants(count: number): Array<Applicant> {
        const applicants: Applicant[] = [];

        for (let i = 0; i < count; ++i) {
            applicants.push(new Applicant(i));
        }

        return applicants;
    }

    calcGraduateScore(applicant: Applicant) {
        return this.skillScale * applicant.getSkillRate()
            + this.luckScale* applicant.getLuckRate();
    }

    getTopApplicants(): Array<Applicant> {
        const sorted = [...this.applicants].sort(
            (a, b) => this.calcGraduateScore(b) - this.calcGraduateScore(a)
        );

        return sorted.slice(0, this.graduateSlots);
    }

    calcAverageLuck(applicants: Array<Applicant>): number {
        if (applicants.length == 0) {
            return 0;
        }

        const totalScore = this.applicants.reduce(
            (sum, applicant) => sum + applicant.getLuckRate(), 0
        );

        return totalScore / this.applicants.length;
    }

    calcAverageScore(applicants: Array<Applicant>): number {
        if (applicants.length == 0) {
            return 0;
        }

        const totalScore = this.applicants.reduce(
            (sum, applicant) => sum + this.calcGraduateScore(applicant), 0
        );

        return totalScore / this.applicants.length;
    }

    displayApplicants(applicants: Array<Applicant>) {
        console.log('\nTop Graduates:');
        console.log('ID\tLuck\tSkill\tScore');
        console.log('-'.repeat(40));

        for (const applicant of applicants) {
            console.log(
                `${applicant.id}\t${applicant.getLuckRate().toFixed(2)}\t` +
                `${applicant.getSkillRate().toFixed(2)}\t`+ 
                `${this.calcGraduateScore(applicant).toFixed(2)}`
            );
        }
    }
    
    runSimulation() {
        const topGraduates = this.getTopApplicants();
        this.displayApplicants(topGraduates);
        
        console.log("\nStatistics:");
        console.log(
            `Average Graduate Score: ${this.calcAverageScore(topGraduates).toFixed(2)}`
        );
        console.log(
            `Average Luck Rate: ${this.calcAverageLuck(topGraduates).toFixed(2)}`
        );
    }

    public static operate() {
        const totalApplicants = 12000;
        const graduationSlots = 10;

        const course = new Class(
            totalApplicants, graduationSlots, 0.95, 0.05
        );
        course.runSimulation();
        
        console.log("\n--- Running simulation again ---");
        course.runSimulation();
    }
}

Class.operate();