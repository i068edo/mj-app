import React from 'react';


function RuleBook() {
  return (
    <div >


      <h1 style={{ fontSize: 'large' }}>麻雀の手役一覧</h1>
      <p>麻雀ゲームを行う為には、麻雀の役とルールを覚えなければなりません。<br />
        最初から全ての役を覚える必要はありません！少しずつ頑張って覚えましょう！
      </p>


      <h2 style={{ fontSize: 'medium', color: '#F57900' }}>一飜役</h2>
      <p><b style={{ color: '#0000FF' }}>立直（リーチ）</b></p>
      <p>チー・ポンせずに、門前で聴牌（テンパイ）すれば「立直」と宣言することによって一飜を与えられる役です。<br />
        但し「立直」をするためには立直料として１０００点が必要です。
      </p>
      <p><b style={{ color: '#0000FF' }}>平和（ピンフ）</b><br />
        <img src="https://gigaplus.makeshop.jp/mahjong/image/pai/pinf.gif" alt="ピンフ" />
      </p>
      <p>役牌以外で構成された雀頭（ジャントウ）が一組、完成された順子（シュンツ）が三組、両面待ちになっている塔子（ターツ）の面子一組が平和の条件で、<br />
        しかも門前（チー・ポンしない）でなければなりません。
      </p>
      <p><b style={{ color: '#0000FF' }}>一発（イッパツ）</b></p>
      <p>立直後、鳴きのない1巡以内に上がると成立する役です。<br />
      立直してから次の自分のツモを含めて1巡です。</p>

      <p><b style={{ color: '#0000FF' }}>門前自摸（メンゼンツモ）</b></p>
      <p>チー・ポンしないで門前で聴牌をしていて、和り牌をツモった時に与えられる役です。</p>

      <p><b style={{ color: '#0000FF' }}>自風牌（ジカゼハイ）</b></p>
      <p>「東」「南」「西」「北」の4種類の牌のことを風牌と呼びます。現在の局における自分の風の風牌の刻子をそろえた役です。<br />
      門前でもポンしていても一飜です。</p>

      <p><b style={{ color: '#0000FF' }}>場風牌（バカゼハイ）</b></p>
      <p>「東」「南」「西」「北」の4種類の牌のことを風牌と呼びます。現在の局における場の風牌の刻子をそろえた役です。<br />
      門前でもポンしていても一飜です。</p>

      <p><b style={{ color: '#0000FF' }}>白・發・中（ハク・ハツ・チュン）</b></p>
      <p>「白」「發」「中」の3種類の牌のことを三元牌と呼びます。三元牌のどれかの刻子をそろえた役です。<br />
      門前でもポンしていても一飜です。</p>

      <p><b style={{ color: '#0000FF' }}>断公九（タンヤオ）</b><br />
        <img src="https://gigaplus.makeshop.jp/mahjong/image/pai/tanyao.gif" alt="タンヤオ" />
      </p>
      <p>手牌が中張牌（チュウチャンハイ、2から8までの数牌）だけで作られているもの。門前でも、チー・ポンしていても一飜です。</p>
      
      <p><b style={{ color: '#0000FF' }}>一盃口（イーペーコー）</b><br />
        <img src="https://gigaplus.makeshop.jp/mahjong/image/pai/ipeko.gif" alt="イーペーコー" />
      </p>
      <p>同じ順子の組み合わせが２組あるときに与えられる手役。鳴く（チー・ポンする）と無効になります。</p>

      <p><b style={{ color: '#0000FF' }}>槍槓（チャンカン）</b></p>
      <p>他家が加槓（ポンしている刻子と同じ牌をツモって槓子にすること）をしようとした牌で和了ると成立する役です。</p>

      <p><b style={{ color: '#0000FF' }}>嶺上開花（リンシャンカイホウ/リンシャン）</b></p>
      <p>聴牌時に槓をしたときにツモる嶺上牌で和了ると成立する役です。</p>

      <p><b style={{ color: '#0000FF' }}>海底撈月（ハイテイモーユエ/ハイテイ）</b></p>
      <p>海底牌（一局の中で一番最後に積もられる牌）でのツモ和了で成立する役です。</p>

      <p><b style={{ color: '#0000FF' }}>河底撈魚（ホウテイラオユイ/ホウテイ）</b></p>
      <p>河底牌（一局の中で一番最後に川に置かれた捨て牌）でロン和了すると成立する役です。</p>


      <h2 style={{ fontSize: 'medium', color: '#F57900' }}>ニ飜役</h2>
      
      <p><strong style={{ color: '#0000FF' }}>七対子（チートイツ/チートイ）</strong><br />
        <img src="https://gigaplus.makeshop.jp/mahjong/image/pai/chitoitu.gif" alt="チートイツ" /><br />
        対子（同じ牌が2つある形）が7組あると成立する役です。俗に「ニコニコ」と呼ばれている役です。
      </p><br />

      <p><b style={{ color: '#0000FF' }}>ダブル立直（ダブルリーチ）</b></p>
      <p>局の一巡目で誰も鳴いていない（ポン・チーがされていない）状態で立直を宣言することで成立する役です。</p>

      <p><strong style={{ color: '#0000FF' }}>三色同順（サンショクドウジュン）</strong><br />
        <img src="https://gigaplus.makeshop.jp/mahjong/image/pai/sandoujyun.gif" alt="サンショクドウジュン" /><br />
        数の同じ順子（上記の場合には6・7・8）を一組ずつ揃えた役です。鳴くと一飜にしかなりません（食い下がりという）。
      </p><br />

      <p><strong style={{ color: '#0000FF' }}>三槓子（サンカンツ）</strong><br />
        <img src="https://gigaplus.makeshop.jp/mahjong/image/pai/sankantu.gif" alt="サンカンツ" /><br />
        明槓（ミンカン）でも暗槓（アンカン）でも槓が３組揃った時に与えられる手役です。
      </p><br />

      <p><strong style={{ color: '#0000FF' }}>対々和（トイトイホー/トイトイ）</strong><br />
        <img src="https://gigaplus.makeshop.jp/mahjong/image/pai/toitoi.gif" alt="トイトイ" /><br />
        刻子を４組、雀頭を一組揃えたときに与えられる役です。
      </p><br />

      <p><strong style={{ color: '#0000FF' }}>三暗刻（サンアンコー）</strong><br />
        <img src="https://gigaplus.makeshop.jp/mahjong/image/pai/sananko.gif" alt="サンアンコー" /><br />
        手牌の中に暗刻（ポンを使わない刻子）を３組揃えた役です。
      </p><br />

      <p><strong style={{ color: '#0000FF' }}>小三元（ショーサンゲン）</strong><br />
        <img src="https://gigaplus.makeshop.jp/mahjong/image/pai/chosangen.gif" alt="ショーサンゲン" /><br />
        三元牌の白・発・中のうち二組を刻子にし、残り一組を雀頭にした役です。<br />
        手牌に必ず三元牌の内2つの刻子が存在するために4翻役として数えられる場合もあります。
      </p><br />

      <p><strong style={{ color: '#0000FF' }}>混老頭（ホンロートウ）</strong><br />
        <img src="https://gigaplus.makeshop.jp/mahjong/image/pai/honrouotu.gif" alt="ホンロートウ" /><br />
        一・九・字牌だけで作られた役です。和りの形は七対子か対々和が複合します。
      </p><br />

      <p><strong style={{ color: '#0000FF' }}>全帯公（チャンタ）</strong><br />
        <img src="https://gigaplus.makeshop.jp/mahjong/image/pai/canta.gif" alt="チャンタ" /><br />
        一・九・字牌を含む順子又は刻子を揃えた役です。但し鳴くと一飜にしかなりません。
      </p><br />

      <p><strong style={{ color: '#0000FF' }}>一気通貫（イッキツーカン/イッツー）</strong><br />
        <img src="https://gigaplus.makeshop.jp/mahjong/image/pai/iki.gif" alt="イッキツーカン" /><br />
        同種牌の「一」から「九」まで揃えた役です。但し鳴くと一飜にしかなりません。
      </p><br />

      <p><strong style={{ color: '#0000FF' }}>三色同刻（サンショクドウコク）</strong><br />
        <img src="https://gigaplus.makeshop.jp/mahjong/image/pai/sandoukou.gif" alt="サンショクドウコク" /><br />
        数の同じ刻子（上記の場合には5）を一組ずつ揃えた役です。
      </p><br />      


      <h2 style={{ fontSize: 'medium', color: '#F57900' }}>三飜役</h2>

      <p>
        <strong style={{ color: '#0000FF' }}>混一色（ホンイツ/ホンイーソー）</strong><br />
        <img src="https://gigaplus.makeshop.jp/mahjong/image/pai/honitu.gif" alt="ホンイツ" /><br />
        字牌と数牌（但し一色）の和り。鳴くとニ飜にしかなりません。
      </p><br />

      <p>
        <strong style={{ color: '#0000FF' }}>純全帯公（ジュンチャン）</strong><br />
        <img src="https://gigaplus.makeshop.jp/mahjong/image/pai/juncan.gif" alt="ジュンチャン" /><br />
        順子又は刻子の全てに１か９に含まれているもの。但し鳴くとニ飜にしかなりません。
      </p><br />

      <p>
        <strong style={{ color: '#0000FF' }}>ニ盃口（リャンペーコー）</strong><br />
        <img src="https://gigaplus.makeshop.jp/mahjong/image/pai/ryanpe.gif" alt="リャンペーコー" /><br />
        イーペーコーが２つ重なったもの。但し鳴くと無効になります。
      </p><br />
      


      <h2 style={{ fontSize: 'medium', color: '#F57900' }}>六飜役</h2>

      <p>
        <strong style={{ color: '#0000FF' }}>清一色（チンイツ/チンイーソー）</strong><br />
        <img src="https://gigaplus.makeshop.jp/mahjong/image/pai/chintu.gif" alt="チンイツ" /><br />
        一色牌だけで揃えたあがり。但し鳴くと五飜にしかなりません。
      </p><br />


      <h2 style={{ fontSize: 'medium', color: '#F57900' }}>役満</h2>

      <p>
        <strong style={{ color: '#0000FF' }}>四暗刻（スーアンコー）</strong><br />
        <img src="https://gigaplus.makeshop.jp/mahjong/image/pai/suanko-1.gif" alt="スーアンコー1" /><br />
        ポンを使わずにメンゼンでアンコを４つ使ったあがり。<br />
        聴牌したときに頭待ちならロンできますが，アンコの待ちのときは自摸の場合のみ成立する役です。
      </p><br />

      <p>
        <strong style={{ color: '#0000FF' }}>四喜和（スーシーホー）</strong><br />
        <img src="https://gigaplus.makeshop.jp/mahjong/image/pai/sushiho-1.gif" alt="スーシーホー1" /><br />
        <img src="https://gigaplus.makeshop.jp/mahjong/image/pai/sushiho-2.gif" alt="スーシーホー2" /><br />
        風牌の４組を刻子にするか、３組を刻子にして残り１組を雀頭にしたものです。
      </p><br />

      <p>
        <strong style={{ color: '#0000FF' }}>清老頭（チンロートウ）</strong><br />
        <img src="https://gigaplus.makeshop.jp/mahjong/image/pai/chinroto.gif" alt="チンロートウ" /><br />
        １と９の牌を刻子にしたあがり。
      </p><br />

      <p>
        <strong style={{ color: '#0000FF' }}>国士無双（コクシムソウ）</strong><br />
        <img src="https://gigaplus.makeshop.jp/mahjong/image/pai/kokushi-1.gif" alt="コクシムソウ1" /><br />
        <img src="https://gigaplus.makeshop.jp/mahjong/image/pai/kokushi-2.gif" alt="コクシムソウ2" /><br />
        １・９・字牌を一枚ずつ揃えて、そのうち一組を雀頭にしたあがり。<br />
        上の場合は１３種類のどれでもあがれる。下の場合は頭が出来ているので西でないとあがれません。
      </p><br />

      <p>
        <strong style={{ color: '#0000FF' }}>四槓子（スーカンツ）</strong><br />
        <img src="https://gigaplus.makeshop.jp/mahjong/image/pai/sukantu.gif" alt="スーカンツ" /><br />
        上記のように一人で４つカンをしたあがり。
      </p><br />

      <p>
        <strong style={{ color: '#0000FF' }}>大三元（ダイサンゲン）</strong><br />
        <img src="https://gigaplus.makeshop.jp/mahjong/image/pai/daisangen.gif" alt="ダイサンゲン" /><br />
        白・発・中の三元牌を３つ刻子にしたあがり。
      </p><br />

      <p>
        <strong style={{ color: '#0000FF' }}>字一色（ツーイーソー）</strong><br />
        <img src="https://gigaplus.makeshop.jp/mahjong/image/pai/tuiso.gif" alt="ツーイーソー" /><br />
        字牌だけによるあがり。
      </p><br />

      <p>
        <strong style={{ color: '#0000FF' }}>緑一色（リューイーソー）</strong><br />
        <img src="https://gigaplus.makeshop.jp/mahjong/image/pai/ryuiso.gif" alt="リューイーソー" /><br />
        文字どおり全てが緑で統一されていなければならない。
      </p><br />

      <p>
        <strong style={{ color: '#0000FF' }}>九蓮宝灯（チューレンポートウ）</strong><br />
        <img src="https://gigaplus.makeshop.jp/mahjong/image/pai/cyurenpoto.gif" alt="チューレンポートウ" /><br />
        １と９の刻子、２から８までを一枚ずつ使った清一色でのあがり。
      </p><br />

      <p>
        <strong style={{ color: '#0000FF' }}>天和（テンホー）</strong><br />
        親の第一ツモによるあがり。
      </p><br />

      <p>
        <strong style={{ color: '#0000FF' }}>地和（チーホー）</strong><br />
        チー・ポン・カンのない子の第一ツモによるあがり。
      </p><br />





    </div>
  );
}

export default RuleBook;