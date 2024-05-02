import Chance from "chance";
import {sayHello} from "../src/example.ts";

describe("example module", () => {
    const chance = new Chance();

    describe("sayHello function", () => {
        it("should returns greetings.", () => {
            const name = chance.name();
            expect(sayHello(name)).toEqual(`Hello, ${name}!`);
        });
    });
});
