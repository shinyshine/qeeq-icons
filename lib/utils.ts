import chalk from "chalk";
import { isObject } from "lodash";

export interface Rule {
    [key: string]: "string" | "number" | "boolean" | "object"
}


export const validate = (rules: Rule, obj: Rule): boolean => {
    const ruleKeys = Object.keys(rules);
    const errKeys: string[] = [];

    if(!isObject(obj)) {
        return false;
    }


    for(const ruleKey of ruleKeys) {
        const ruleType = rules[ruleKey];
        if(typeof obj[ruleKey] !== ruleType) {
            errKeys.push(ruleKey);
        }
    }

    if(errKeys.length) {
        console.log(chalk.red(`${errKeys.concat(',')} 参数确实或格式不正确`))
        return false;
    }

    return true;
}