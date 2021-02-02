import React from "react";

export default function ButtonPanel({
    ac, addition, subraction, modulus, division,
    seven, eight, nine, multiple

}) {
    return (
        <div>
            <button>
                {ac}
            </button>
            <button>
                {addition}
            </button>
            <button>
                {subraction}
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
    )
}
