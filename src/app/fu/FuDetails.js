import React from 'react';

export default function FuDetails() {
    return (
        <details>
            <summary>詳しい符計算について</summary>
            <p>
                基本符20符に、ツモの2符、
                またはメンゼンロンの10符が加算されます。
            </p>
            <p>
                符は最終的に10の位で切り上げて計算を行います。
            </p>
        </details>
    );
}
