import {HRZone} from "./HRZone.ts";

export default function CalculateHRZOnes(selectedMethod: string, age: string, restHr: string, maxHr: string, ltHr: string): Array<HRZone> {
    switch (selectedMethod) {
        case "MHR": {
            return MaxHrCalculation(parseInt(age));
        }
        default:
            return Array<HRZone>();
        case "RHR": {
            return RRHCalculation(parseInt(restHr), parseInt(maxHr));
        }
        case "LTHR": {
            return LTRHCalculation(parseInt(ltHr));
        }
    }
}


function MaxHrCalculation(age: number): Array<HRZone> {
    console.log("passed age is: ", age);
    const HR = 220 - age;
    const z1 = new HRZone("z1", HR * 0.5, HR * 0.6);
    const z2 = new HRZone("z2", HR * 0.6, HR * 0.7);
    const z3 = new HRZone("z3", HR * 0.7, HR * 0.8);
    const z4 = new HRZone("z4", HR * 0.8, HR * 0.9);
    const z5 = new HRZone("z5", HR * 0.9, HR);
    return (
        new Array<HRZone>(z1, z2, z3, z4, z5)
    );
}

//TODO try to refactor this into one resusable function for Max and RRH calc since zones are calculated with the same %
function RRHCalculation(restHr: number, maxHr: number): Array<HRZone> {
    console.log("passed rest hr: ", restHr);
    console.log("passed max hr: ", maxHr);
    const HRR = maxHr - restHr;
    const z1 = new HRZone("z1", HRR * 0.5, HRR * 0.6);
    const z2 = new HRZone("z2", HRR * 0.6, HRR * 0.7);
    const z3 = new HRZone("z3", HRR * 0.7, HRR * 0.8);
    const z4 = new HRZone("z4", HRR * 0.8, HRR * 0.9);
    const z5 = new HRZone("z5", HRR * 0.9, HRR);
    return (
        new Array<HRZone>(z1, z2, z3, z4, z5)
    );
}

function LTRHCalculation(ltrHr: number): Array<HRZone> {
    console.log("passed lt hr: ", ltrHr);
    const z1 = new HRZone("z1", ltrHr * 0.50, ltrHr * 0.80);
    const z2 = new HRZone("z2", ltrHr * 0.81, ltrHr * 0.89);
    const z3 = new HRZone("z3", ltrHr * 0.90, ltrHr * 0.93);
    const z4 = new HRZone("z4", ltrHr * 0.94, ltrHr * 0.99);
    const z5 = new HRZone("z5", ltrHr, ltrHr * 1.2);
    return (
        new Array<HRZone>(z1, z2, z3, z4, z5)
    );
}


