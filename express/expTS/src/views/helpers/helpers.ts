import { Technologie } from "./helpersTypes";

export function toUpper(str: string): string {
    return str.toUpperCase();
}

export function poweredByNodejs(technologies: Technologie[]): string {
    const list = technologies.map(tech => {
        if (tech.poweredByNodejs) return `<li> ${tech.nome} - ${tech.type} </li>`;
    });
    return `<ul>${list.join("\n")}</ul>`;
}