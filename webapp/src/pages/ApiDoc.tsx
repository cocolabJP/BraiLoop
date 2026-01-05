import Footer from "@/components/Footer";
import Header from "@/components/Header";

export default function ApiDoc() {
  const statusCodeTable = [
    ['ステータスコード', '意味'],
    ['200', 'リクエスト成功'],
    ['400', 'リクエストパラメータが不正'],
    ['404', '存在しないリソースにアクセス'],
    ['500', 'サーバエラー'],
  ];

  const pavementsQueryParamsTable = [
    ['クエリパラメータ', 'データ型', '補足'],
    ['tactile_paving', '"all" | "guiding" | "warning" | "none"', '点字ブロック種別でフィルタリング ("none": 点字ブロックなし)'],
    // ['start_at', 'datetime', '撮影日フィルタの開始日時'],
    // ['end_at', 'datetime', '撮影日フィルタの終了日時']
  ];

  const pavementsResParamsTable = [
    ['パラメータ', 'データ型', '補足'],
    ['id', 'uuid', ''],
    ['camera_timestamp', 'datetime', '撮影時の時間'],
    ['latitude', 'float', '緯度'],
    ['latitude', 'float', '経度'],
    ['image_url', 'string', '路面画像のURL'],
    ['classes', 'int[]', '画像に含まれる点字ブロック種別ID (0: 点状, 1: 線状)'],
  ];

  return (
    <>
      <Header />

      <div className="max-w-4xl mx-auto py-8 px-4">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-2 mb-8">
          <h1 className="text-2xl md:text-3xl font-semibold">BraiLoop API ドキュメント</h1>
          <p className="text-sm text-black/50">更新: 2026年1月5日</p>
        </div>
        <Section heading="概要">
          <SubSection heading="URL">
            Comming Soon...
          </SubSection>
          <SubSection heading="ステータスコード">
            <Table contents={statusCodeTable} centralizeIndices={[0]} boldIndices={[0]} maxWidth={600} />
          </SubSection>
          <SubSection heading="補足事項">
            <p>本APIで扱う日付・時刻は<span className="font-semibold">ISO8601形式</span>で、タイムゾーンは<span className="font-semibold">UTC</span>です。</p>
          </SubSection>
        </Section>
        <Section heading="路面情報" endpoint="/pavements">
          <SubSection heading="路面情報一覧の取得">
            <p>BraiLoop Bicycleから取得された路面情報データを取得します。</p>
            <Code block>GET /pavements HTTP/1.1</Code>
            <SubSubSection heading="Request">
              <p>デフォルトではすべての路面情報データが取得されますが、以下のクエリパラメータを設定することでフィルタリングが可能です。</p>
              <Table contents={pavementsQueryParamsTable} centralizeIndices={[0, 1]} boldIndices={[0]} />
              <p>リクエスト例:</p>
              {/* <Code block>https://xxx/pavements?tactile_paving=all&start_at=2026-01-01T06:30:00Z</Code> */}
              <Code block>https://api.brailoop.cocolab.jp/v1/pavements?tactile_paving=all</Code>
              <div role="alert" className="alert alert-warning my-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 shrink-0 stroke-current" fill="none" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                </svg>
                <p>
                  点字ブロックフィルタリングは独自に学習した機械学習モデルにより行われ、100%の検出・分類性能を補償するものではございません。
                  詳しくはこちらの<a href="https://doi.org/10.1145/3737611.3776614" target='_blank' className="border-b px-0.5">論文</a>をご覧ください。
                  (モデル性能は予告なく変更される場合がございます)
                </p>
              </div>
            </SubSubSection>
            <SubSubSection heading="Response">
              <Table contents={pavementsResParamsTable} centralizeIndices={[0, 1]} boldIndices={[0]} />
              <p>レスポンス例:</p>
              <Code block>{
  `HTTP/1.1 200 OK
  [
    {
      "id": "00286a59-ddaa-4351-b7ea-60554789040c",
      "camera_timestamp": "2025-07-20T07:42:45.780000Z",
      "latitude": 34.635621,
      "longitude": 133.921765,
      "image_url": "https://res.cloudinary.com/dxwwpkxo2/image/upload/v1752997367/3_2025-07-20T07-42-45.780Z.jpg",
      "classes": [0, 1]
    },
    ...
  ]`
              }</Code>
            </SubSubSection>
          </SubSection>
        </Section>
      </div>

      <Footer />
    </>
  )
}

function Section({
  heading,
  endpoint,
  children
}: {
  heading: string
  endpoint?: string
  children: React.ReactNode
}) {
  return (
    <section className="my-4">
      <h2 className="text-xl md:text-2xl font-semibold border-b border-base-300 pb-1 mb-4">
        {heading}
        {endpoint && <span className="pl-2">(<Code>{endpoint}</Code>)</span>}
      </h2>
      {children}
    </section>
  )
}

function SubSection({
  heading,
  children
}: {
  heading: string
  children: React.ReactNode
}) {
  return (
    <div className="my-2">
      <h3 className="text-lg md:text-xl font-semibold mb-2">{heading}</h3>
      {children}
    </div>
  )
}

function SubSubSection({
  heading,
  children
}: {
  heading: string
  children: React.ReactNode
}) {
  return (
    <div className="my-2">
      <h4 className="text-md md:text-lg font-semibold mb-2">{heading}</h4>
      {children}
    </div>
  )
}

function Table({
  contents,
  centralizeIndices = [],
  boldIndices = [],
  maxWidth
}: {
  contents: string[][]
  centralizeIndices?: number[]
  boldIndices?: number[]
  maxWidth?: number
}) {
  return (
    <table className="w-full text-sm border-collapse border border-neutral/30 my-4 mx-auto" style={{ maxWidth: `${maxWidth}px` }}>
      <thead>
        <tr>
          {contents[0].map((head, i) => (
            <th key={i} className="bg-primary-content not-last:border-r border-b border-neutral/30 py-1.5">{head}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {contents.filter((_, i) => i).map((row, i) => (
          <tr key={i}>
            {row.map((data, j) => {
              const styles: string[] = [];
              if (i % 2) styles.push('bg-primary-content/20');
              if (centralizeIndices.includes(j)) styles.push('text-center');
              if (boldIndices.includes(j)) styles.push('font-semibold');

              return (
                <td key={j} className={`not-last:border-r border-b border-neutral/30 py-1.5 px-2 ${styles.join(' ')}`}>{data}</td>
              )
            })}
          </tr>
        ))}
      </tbody>
    </table>
  )
}

function Code({
  block = false,
  children
}: {
  block?: boolean
  children: React.ReactNode
}) {
  return block ? (
    <div className="w-full text-sm text-neutral-content bg-neutral rounded-lg p-4 my-2">
      <pre className="overflow-x-auto"><code>{children}</code></pre>
    </div>
  ) : (
    <span className="text-[80%] font-mono font-normal bg-gray-100 rounded-md py-0.5 p-1">{children}</span>
  )
}