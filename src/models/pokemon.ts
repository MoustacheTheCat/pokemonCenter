export class Pokemon {
    
    constructor(
        private _name: string,
        private _health: string,
        private _picture: string,
        private _cry: string,
    ) {
        
    }

    public get name(): string {
        return this._name;
    }
    public set name(value: string) {
        this._name = value;
    }

    public get health(): string {
        return this._health;
    }
    public set health(value: string) {
        this._health = value;
    }
    public get cry(): string {
        return this._cry;
    }
    public set cry(value: string) {
        this._cry = value;
    }

    public get picture(): string {
        return this._picture;
    }
    public set picture(value: string) {
        this._picture = value;
    }


}