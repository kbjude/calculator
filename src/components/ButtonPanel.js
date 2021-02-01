import React from "react";

export default function ButtonPanel({ac, addition, subraction, modulus, division}) {
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
    )
}
