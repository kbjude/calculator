import React from "react";

export default function ButtonPanel({
    ac, addition, modulus, division,
    seven, eight, nine, multiple,
    four, five, six, minus,
    one, two, three, plus,
    zero, dot, equals

}) {
    return (
        <div>
            <div>
                <button>
                    {ac}
                </button>
                <button>
                    {addition}
                </button>
                <button>
                    {modulus}
                </button>
                <button>
                    {division}
                </button>
            </div>
            <div>
                <button>
                    {seven}
                </button>
                <button>
                    {eight}
                </button>
                <button>
                    {nine}
                </button>
                <button>
                    {multiple}
                </button>
            </div>
            <div>
                <button>
                    {four}
                </button>
                <button>
                    {five}
                </button>
                <button>
                    {six}
                </button>
                <button>
                    {minus}
                </button>
            </div>
            <div>
                <button>
                    {one}
                </button>
                <button>
                    {two}
                </button>
                <button>
                    {three}
                </button>
                <button>
                    {plus}
                </button>
            </div>
            <div>
                <button>
                    {zero}
                </button>
                <button>
                    {dot}
                </button>
                <button>
                    {equals}
                </button>
            </div>
        </div>
    )
}
