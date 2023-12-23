// safe.d.ts

/**
 * A utility library for handling different types of variables safely.
 */
declare module 'safe' {
    /**
     * Safely returns an array. If the input is not an array, an empty array is returned.
     * @param variable - The variable to be checked.
     * @returns The input array or an empty array if the input is not an array.
     */
    export function array(variable: any): any[];

    /**
     * Safely returns an object. If the input is not an object, an empty object is returned.
     * @param variable - The variable to be checked.
     * @returns The input object or an empty object if the input is not an object.
     */
    export function object(variable: any): Record<string, any>;

    /**
     * Safely returns a function. If the input is not a function, a dummy function is returned.
     * @param variable - The variable to be checked.
     * @returns The input function or a dummy function if the input is not a function.
     */
    export function func(variable: any): Function;

    /**
     * Represents the 'safe' module with utility functions.
     */
    export const safe: {
        array(variable: any): any[];
        object(variable: any): Record<string, any>;
        func(variable: any): Function;
    };
}
