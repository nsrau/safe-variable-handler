export function array<T>(variable: T[] | any): T[];

export function func<T extends (...args: any[]) => any>(variable: any): T;

export function object<T extends Record<string, any>>(variable: any): T;
