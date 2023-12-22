import React from 'react';

function RolesList() {
  return (
    <div>


      <h1 style={{ fontSize: 'large' }}>麻雀の手役一覧</h1>
      <p>麻雀ゲームを行う為には、麻雀の役とルールを覚えなければなりません。<br />
        頑張って覚えましょう！
      </p>


      <h2 style={{ fontSize: 'medium', color: '#F57900' }}>一飜役</h2>
      <p><b style={{ color: '#0000FF' }}>①ピンフ（平和）</b><br />
        <img src="https://gigaplus.makeshop.jp/mahjong/image/pai/pinf.gif" alt="ピンフ" />
      </p>
      <p>ジャン頭が一組、完成された順子が三組、リャンメン待ちになっている塔子（ターツ）の面子一組がピンフの条件で、<br />
        しかもメンゼン（チー・ポンしない）でなければなりません。
      </p>

      <p><b style={{ color: '#0000FF' }}>②タンヤオ（断公九）</b><br />
        <img src="https://gigaplus.makeshop.jp/mahjong/image/pai/tanyao.gif" alt="タンヤオ" />
      </p>
      <p>手牌がチュウチャン牌（2から8までの数牌）だけで作られているもの。メンゼンでも、チー・ポンしていても一飜です。</p>

      <p><b style={{ color: '#0000FF' }}>③リーチ（立直）</b></p>
      <p>チー・ポンせずに、メンゼンでテンパイすれば「リーチ」と宣言することによって一飜を与えられる役です。<br />
        但し「リーチ」をするためにはリーチ料として１０００点が必要です。</p>

      <p><b style={{ color: '#0000FF' }}>④メンゼンツモ</b></p>
      <p>チー・ポンしないでメンゼンでテンパイをしていて、和り牌をツモった時に与えられる役です。</p>

      <p><b style={{ color: '#0000FF' }}>⑤イーペーコー（一盃口）</b><br />
        <img src="https://gigaplus.makeshop.jp/mahjong/image/pai/ipeko.gif" alt="イーペーコー" />
      </p>
      <p>同じ順子の組み合わせが２組あるときに与えられる手役。ポン・チーすると無効になります。</p>


      <h2 style={{ fontSize: 'medium', color: '#F57900' }}>ニ飜役</h2>
      <p><strong style={{ color: '#0000FF' }}>①トイトイ（対々）</strong><br />
        <img src="https://gigaplus.makeshop.jp/mahjong/image/pai/toitoi.gif" alt="トイトイ" /><br />
        コーツ（刻子）を４組、ジャン頭を一組揃えたときに与えられる役です。
      </p><br />

      <p><strong style={{ color: '#0000FF' }}>②サンショクドウジュン（三色同順）</strong><br />
        <img src="https://gigaplus.makeshop.jp/mahjong/image/pai/sandoujyun.gif" alt="サンショクドウジュン" /><br />
        数の同じシュンツ（上記の場合には6・7・8）を一組ずつ揃えた役です。チー・ポンすると一飜にしかなりません。
      </p><br />

      <p><strong style={{ color: '#0000FF' }}>③サンショクドウコク（三色同刻）</strong><br />
        <img src="https://gigaplus.makeshop.jp/mahjong/image/pai/sandoukou.gif" alt="サンショクドウコク" /><br />
        数の同じコーツ（上記の場合には5）を一組ずつ揃えた役です。
      </p><br />

      <p><strong style={{ color: '#0000FF' }}>④イッキツーカン（一気通貫）</strong><br />
        <img src="https://gigaplus.makeshop.jp/mahjong/image/pai/iki.gif" alt="イッキツーカン" /><br />
        同種牌の「一」から「九」まで揃えた役です。但しチー・ポンすると一飜にしかなりません。
      </p><br />

      <p><strong style={{ color: '#0000FF' }}>⑤チャンタ（全帯公）</strong><br />
        <img src="https://gigaplus.makeshop.jp/mahjong/image/pai/canta.gif" alt="チャンタ" /><br />
        一・九・字牌を含むシュンツ又はコーツを揃えた役です。但しチー・ポンすると一飜にしかなりません。
      </p><br />

      <p><strong style={{ color: '#0000FF' }}>⑥サンアンコー（三暗刻）</strong><br />
        <img src="https://gigaplus.makeshop.jp/mahjong/image/pai/sananko.gif" alt="サンアンコー" /><br />
        手牌の中にアンコ（ポンを使わないコーツ）を３組揃えた役です。
      </p><br />

      <p><strong style={{ color: '#0000FF' }}>⑦サンカンツ（三槓子）</strong><br />
        <img src="https://gigaplus.makeshop.jp/mahjong/image/pai/sankantu.gif" alt="サンカンツ" /><br />
        ミンカンでもアンカンでもカンが３組揃った時に与えられる手役です。
      </p><br />

      <p><strong style={{ color: '#0000FF' }}>⑧ホンロートウ（混老頭）</strong><br />
        <img src="https://gigaplus.makeshop.jp/mahjong/image/pai/honrouotu.gif" alt="ホンロートウ" /><br />
        一・九・字牌だけで作られた役です。和りの形はチートイツかトイトイが複合します。
      </p><br />

      <p><strong style={{ color: '#0000FF' }}>⑨チートイツ（七対子）</strong><br />
        <img src="https://gigaplus.makeshop.jp/mahjong/image/pai/chitoitu.gif" alt="チートイツ" /><br />
        俗に「ニコニコ」と呼ばれている役です。七組のトイツを揃えた役です。
      </p><br />


      <h2 style={{ fontSize: 'medium', color: '#F57900' }}>三飜役</h2>

      <p>
        <strong style={{ color: '#0000FF' }}>①ホンイツ（混一色）</strong><br />
        <img src="https://gigaplus.makeshop.jp/mahjong/image/pai/honitu.gif" alt="ホンイツ" /><br />
        字牌と数牌（但し一色）の和り。チー・ポンするとニ飜にしかなりません。
      </p><br />

      <p>
        <strong style={{ color: '#0000FF' }}>②リャンペーコー（ニ盃口）</strong><br />
        <img src="https://gigaplus.makeshop.jp/mahjong/image/pai/ryanpe.gif" alt="リャンペーコー" /><br />
        イーペーコーが２つ重なったもの。但しチー・ポンすると無効になります。
      </p><br />

      <p>
        <strong style={{ color: '#0000FF' }}>③ジュンチャン（純全帯公）</strong><br />
        <img src="https://gigaplus.makeshop.jp/mahjong/image/pai/juncan.gif" alt="ジュンチャン" /><br />
        シュンツ又はコーツが全て１か９にかかっているもの。但しチー・ポンするとニ飜にしかなりません。
      </p><br />


      <h2 style={{ fontSize: 'medium', color: '#F57900' }}>四飜役</h2>

      <p>
        <strong style={{ color: '#0000FF' }}>①ショーサンゲン（小三元）</strong><br />
        <img src="https://gigaplus.makeshop.jp/mahjong/image/pai/chosangen.gif" alt="ショーサンゲン" /><br />
        三元牌の白・発・中のうち二組をコーツにし、残り一組をジャン頭にしたもの。<br />
        上記の場合４萬と中の待ちですが、中で和ると大三元の役満、４萬で和ると小三元です。
      </p><br />


      <h2 style={{ fontSize: 'medium', color: '#F57900' }}>六飜役</h2>

      <p>
        <strong style={{ color: '#0000FF' }}>①チンイツ（清一色）</strong><br />
        <img src="https://gigaplus.makeshop.jp/mahjong/image/pai/chintu.gif" alt="チンイツ" /><br />
        一色牌だけで揃えたあがり。但しチー・ポンすると五飜にしかなりません。
      </p><br />


      <h2 style={{ fontSize: 'medium', color: '#F57900' }}>役満</h2>

      <p>
        <strong style={{ color: '#0000FF' }}>①スーアンコー（四暗刻）</strong><br />
        <img src="https://gigaplus.makeshop.jp/mahjong/image/pai/suanko-1.gif" alt="スーアンコー1" /><br />
        <img src="https://gigaplus.makeshop.jp/mahjong/image/pai/suanko-2.gif" alt="スーアンコー2" /><br />
        ポンを使わずにメンゼンでアンコを４つ使ったあがり。<br />
        上の場合はツモあがりでないと役満になりません。<br />
        下の場合はロンあがりでも四アンコの役満です。
      </p><br />

      <p>
        <strong style={{ color: '#0000FF' }}>②スーシーホー（四喜和）</strong><br />
        <img src="https://gigaplus.makeshop.jp/mahjong/image/pai/sushiho-1.gif" alt="スーシーホー1" /><br />
        <img src="https://gigaplus.makeshop.jp/mahjong/image/pai/sushiho-2.gif" alt="スーシーホー2" /><br />
        風牌の４組をコーツにするか、３組をコーツにして残り１組をジャン頭にしたもの。
      </p><br />

      <p>
        <strong style={{ color: '#0000FF' }}>③チンロートウ（清老頭）</strong><br />
        <img src="https://gigaplus.makeshop.jp/mahjong/image/pai/chinroto.gif" alt="チンロートウ" /><br />
        １と９の牌をコーツにしたあがり。
      </p><br />

      <p>
        <strong style={{ color: '#0000FF' }}>④コクシムソウ（国士無双）</strong><br />
        <img src="https://gigaplus.makeshop.jp/mahjong/image/pai/kokushi-1.gif" alt="コクシムソウ1" /><br />
        <img src="https://gigaplus.makeshop.jp/mahjong/image/pai/kokushi-2.gif" alt="コクシムソウ2" /><br />
        １・９・字牌を一枚ずつ揃えて、そのうち一組をジャン頭にしたあがり。<br />
        上の場合は１３種類のどれでもあがれる。下の場合は頭が出来ているので西でないとあがれない。
      </p><br />

      <p>
        <strong style={{ color: '#0000FF' }}>⑤スーカンツ（四槓子）</strong><br />
        <img src="https://gigaplus.makeshop.jp/mahjong/image/pai/sukantu.gif" alt="スーカンツ" /><br />
        上記のように一人で４つカンをしたあがり。
      </p><br />

      <p>
        <strong style={{ color: '#0000FF' }}>⑥ダイサンゲン（大三元）</strong><br />
        <img src="https://gigaplus.makeshop.jp/mahjong/image/pai/daisangen.gif" alt="ダイサンゲン" /><br />
        白・発・中の三元牌を３つコーツにしたあがり。
      </p><br />

      <p>
        <strong style={{ color: '#0000FF' }}>⑦ツーイーソー（字一色）</strong><br />
        <img src="https://gigaplus.makeshop.jp/mahjong/image/pai/tuiso.gif" alt="ツーイーソー" /><br />
        字牌だけによるあがり。
      </p><br />

      <p>
        <strong style={{ color: '#0000FF' }}>⑧リューイーソー（緑一色）</strong><br />
        <img src="https://gigaplus.makeshop.jp/mahjong/image/pai/ryuiso.gif" alt="リューイーソー" /><br />
        文字どおり全てが緑で統一されていなければならない。
      </p><br />

      <p>
        <strong style={{ color: '#0000FF' }}>⑨チューレンポートウ（九蓮宝灯）</strong><br />
        <img src="https://gigaplus.makeshop.jp/mahjong/image/pai/cyurenpoto.gif" alt="チューレンポートウ" /><br />
        １と９のコーツ、２から８までを一枚ずつ使ったチンイーソーでのあがり。
      </p><br />

      <p>
        <strong style={{ color: '#0000FF' }}>⑩テンホー（天和）</strong><br />
        親の第一ツモによるあがり。
      </p><br />

      <p>
        <strong style={{ color: '#0000FF' }}>⑪チーホー（地和）</strong><br />
        チー・ポン・カンのない子の第一ツモによるあがり。
      </p><br />





    </div>
  );
}

export default RolesList;