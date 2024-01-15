import { useState, useCallback } from "react";

export function useIncrementQty(initialValue = 0){
    const [value, setValue] = useState(initialValue)


    return {
        value: value,
        increment: useCallback(() => setValue((v) => v + 1), []),
        decrement: useCallback(() => setValue((v) => (v > 0 ? v - 1 : 0)), [])
    }
}