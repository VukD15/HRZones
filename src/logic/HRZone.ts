export class HRZone {
    private _zoneName: string;
    private _zoneMin: number;
    private _zoneMax: number;


    constructor(zoneName: string, zoneMin: number, zoneMax: number) {
        this._zoneName = zoneName;
        this._zoneMin = Number(zoneMin.toFixed(0));
        this._zoneMax = Number(zoneMax.toFixed(0));
    }


    get zoneName(): string {
        return this._zoneName;
    }

    get zoneMin(): number {
        return this._zoneMin;
    }

    get zoneMax(): number {
        return this._zoneMax;
    }
}
