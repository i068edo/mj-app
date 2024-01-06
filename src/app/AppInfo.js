import React from 'react';

export default function AppInfo() {
    return (
        <div>
            <h3>このアプリの使い方</h3>
            <div>
                <ol type='1' >
                    <li>ラジオグループは入力必須です。まずはこちらを入力しましょう。</li>
                    <img src="photo/radioInfo.png" />
                    <li>どの役で和了したのかを入力しましょう。</li>
                    <img src="photo/yakuInfo.png" />
                    <li>入力内容が正しければ「計算する」ボタンを押しましょう。</li>
                    <img src="photo/buttonInfo.png" />
                </ol>
            </div>
        </div>
    );
}
