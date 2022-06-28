
export function toPromise<T>(o: T): Promise<T> {
    return new Promise((resolve) => resolve(o));
}


export function sleep(timeMs: number): Promise<boolean> {
    return new Promise((resolve) => {
        setTimeout(() => resolve(true), timeMs);
    });
}


export async function repeatUntil<T>(
    action: () => Promise<T>,
    predicate: (result: T) => boolean): Promise<T> {

    let result = await action();
    while (!predicate(result)) {
        result = await action();
    }
    return result;
}

