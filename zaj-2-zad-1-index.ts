import {DataProcessor} from "./data-processor";

const proc = new DataProcessor<string>();

proc.addData("X");
proc.addData("YZ");

const process = (d: string) => {
    console.log(d);
}

proc.processData(process);

const filtered = proc.filterData((d: string): boolean => d.length >= 2);
console.log(filtered);
