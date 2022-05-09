// Return type for functions that do performance profiling.
// Can be accumulated by name to form averages and maxima.
// Can be compared to other timings to get fractions.
export default class ProfiledValue<T> extends Promise<T>
{
    time: number;
    name: string;
    constructor(time: number, name: string, resolve: () => T)
    {
        super(resolve);
        this.time = time;
        this.name = name;
    }
}
