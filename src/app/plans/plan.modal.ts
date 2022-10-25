export class Plan {
    planName : string;
    financier : string;
    minAmount : number;
    maxAmount : number;
    intrestRate : number;
    emiValue : number;
    constructor(planName: string ,financier : string ,minAmount: number ,maxAmount: number , intrestRate: number, emiValue : number) {
        this.planName = planName;
        this.financier = financier;
        this.minAmount = minAmount;
        this.maxAmount = maxAmount;
        this.intrestRate = intrestRate;
        emiValue = emiValue;
    }
}