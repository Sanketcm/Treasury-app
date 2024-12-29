import { CounterParty } from "./counterparty.model";
import { Account } from "./account.model";
import { Company } from "./company.model";
import { Investment } from "./investment.model";
import { InterestDependent } from "./interest-dependent.model";

export interface Loan extends InterestDependent {
    counterParty: CounterParty;
    loanType: string;
    referenceNumber: string;
    borrowing: boolean;
    interestRate: number;
    securityDetails: string;
    company: Company;
    secured: boolean;
    preClosureAllowed: boolean;
    emiAmount: number;
    readonly currentOutstandingAmount: number;
    readonly closed: boolean;
}