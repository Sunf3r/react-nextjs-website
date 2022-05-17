import type { Route } from "../../index.d.ts";

export default abstract class route implements Route {
    paths!: string[];
    method!: string;

    // constructor(public db: Database) {
        // this.db = db;
    // }

    abstract exec(...args: any): Promise<string>;
}