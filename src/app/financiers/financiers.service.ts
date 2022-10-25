import {Subject} from 'rxjs';
import { Financier } from './financier.modal';

export class FinanciersService {
    selectedFinancier  = new Subject<Financier>() // replacing  eventemitter with subject
    financiers : Financier[] = [
        new Financier('Akshay',10034,'http://www.webcoderskull.com/img/team4.png',5),
        new Financier('Gopi',28976,'http://www.webcoderskull.com/img/team2.png',4),
        new Financier('Narender',13321,'https://www.webcoderskull.com/img/team3.png',4),
        new Financier('Shilpa',24976,'https://www.webcoderskull.com/img/team1.png',4)
       ];
       constructor() { }

       getFinanciers() {
        return this.financiers;
       }
       getFinancier(id: any) {
        return this.financiers.find(o => o.id === id);
       }
       addFinancier() { // Not
        this.financiers.push(new Financier('Gopi',28976,'http://www.webcoderskull.com/img/team2.png',4));
        console.log(this.financiers);
       }
    //    getFinancierWithId(id:any) {
    //     return this.financiers[id];
    //    }
}
