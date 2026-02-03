export interface Research {
    id: string
    publications: {
        bibtex: boolean
        paper: string | null
        poster: string | null
        slide: string | null
    }
    entry: 'article' | 'inproceedings' | 'thesis'
    title: string
    author: string
    bookTitle: string
    volume?: string | number
    number?: string | number
    pages: string
    url?: string
    date: string
    location?: string
    awards?: Award[]
}

interface Award {
    name:   string
    url?:   string
    modal?: React.ComponentType<any>
}

export const research: Research[] = [
    {
        id: 'BraiLoop_202601_SeMI',
        publications: {
            bibtex: true,
            paper: 'https://cocolab.jp/publication/files/202601_SeMI_YutoMatsuda.pdf',
            poster: null,
            slide: 'https://www.slideshare.net/slideshow/embed_code/key/fomQ0v6GMtDDoi?hostedIn=slideshare&page=upload',
        },
        entry: 'inproceedings',
        title: '自転車ユーザ参加型路面画像センシングによる点字ブロック検出における性能向上方法の模索',
        author: '松田悠斗, 松田裕貴',
        bookTitle: '電子情報通信学会技術研究報告, センサネットワークとモバイルインテリジェンス研究会（SeMI）',
        volume: 125,
        number: 325,
        pages: '79--84',
        url: 'https://ken.ieice.org/ken/paper/20260123dcRB/',
        date: '2026-1-23',
        location: '大分県由布市 三菱電機 湯布院保養所',
    },
    {
        id: 'BraiLoop_202601_ICDCN-MUSICAL',
        publications: {
            bibtex: true,
            paper: 'https://cocolab.jp/publication/files/202601_ICDCN_YutoMatsuda.pdf',
            poster: null,
            slide: 'https://www.slideshare.net/slideshow/embed_code/key/2aw9vM6TdZSr5v?hostedIn=slideshare&page=upload',
        },
        entry: 'inproceedings',
        title: 'Tactile Paving Detection and Classification Method Based on Cyclist-Participatory Road Image Sensing',
        author: 'Yuto Matsuda, Yuki Matsuda',
        bookTitle: 'Companion Proceedings of the 27th International Conference on Distributed Computing and Networking',
        pages: '78--83',
        url: 'https://doi.org/10.1145/3737611.3776614',
        date: '2026-1-6',
        location: 'Nara Kasugano International Forum IRAKA, Nara, Japan',
    },
    {
        id: 'BraiLoop_202509_IPSJ-Kansai',
        publications: {
            bibtex: true,
            paper: 'https://cocolab.jp/publication/files/202509_IPSJ-Kansai_YutoMatsuda.pdf',
            poster: null,
            slide: 'https://www.slideshare.net/slideshow/embed_code/key/m6JmaqnjHfQufV?hostedIn=slideshare&page=upload',
        },
        entry: 'inproceedings',
        title: '自転車ユーザ参加型路面画像センシングによる点字ブロック配置情報の収集手法の検討',
        author: '松田悠斗, 松田裕貴',
        bookTitle: '2025年度 情報処理学会関西支部 支部大会 講演論文集',
        volume: 2025,
        pages: '1--8',
        url: 'https://ipsj.ixsq.nii.ac.jp/records/2004479',
        date: '2025-9-28',
        location: 'オンライン',
    },
];