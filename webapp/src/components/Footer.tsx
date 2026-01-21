import { Modal, ModalCloseButton, useModal } from "./Modal";

export default function Footer() {
  const [isOpen, openModal, closeModal] = useModal();

  return (
    <footer className='w-full bg-base-100 border-t border-base-300'>
      <div className="max-w-4xl text-center space-y-4 mx-auto py-8">
        <button onClick={() => openModal('data-policy')} className="text-sm md:text-base cursor-pointer border-b border-base-content px-1">データの利用について</button>
        <p>&copy; BraiLoop Licensed under <a href="https://creativecommons.org/licenses/by/4.0/" target="_blank">CC BY 4.0</a></p>
      </div>

      <Modal isOpen={isOpen('data-policy')} bgClose={closeModal} className="max-w-[800px] w-[85%] max-h-[80%] rounded-lg">
        <ModalCloseButton onClose={closeModal} size='md' top={8} right={8} />
        <div className="text-white gradient-tp space-y-4 py-4 px-4 md:px-8">
          <h1 className="text-xl md:text-2xl font-bold">データの利用について</h1>
          <p className="text-sm font-semibold">最終更新: 2026年1月12日</p>
        </div>
        <div className="bg-base-100 space-y-6 py-4 px-4 md:px-8">
          <div className="space-y-2">
            <h2 className="text-xl font-semibold">ライセンス</h2>
            <div className="text-sm">
              <p>
                BraiLoop により提供されるデータ, API仕様, および関連ドキュメントはCreative Commons Attribution 4.0 International（CC BY 4.0） の下で公開されています。
                本ライセンスのもとで、利用者は以下を行うことができます。
              </p>
              <ul className="list-disc ml-8 my-2">
                <li>データの利用・再配布</li>
                <li>改変および派生物の作成</li>
                <li>商用・非商用を問わない利用</li>
              </ul>
              <p>ただし、データ利用の際は以下のクレジットを表記してください。</p>
              <div className="w-full text-xs text-neutral-content bg-neutral rounded-lg py-2 px-4 my-2">
                <pre className="overflow-x-auto"><code>&amp;copy; &lt;a href="https://brailoop.cocolab.jp/"&gt;BraiLoop&lt;/a&gt; contributors</code></pre>
              </div>
            </div>
          </div>
          <div className="space-y-2">
            <h2 className="text-xl font-semibold">学術研究での利用について</h2>
            <div className="text-sm">
              <p>
                本データは、学術研究・論文執筆・研究発表に自由に利用できます。
                研究成果を公表する際には、本研究プロジェクトへの適切な引用をお願いします。
              </p>
              <div className="w-full text-xs text-neutral-content bg-neutral rounded-lg py-2 px-4 my-2">
                <pre className="overflow-x-auto"><code>{`@inproceedings{bib:BraiLoop_202601_ICDCN-MUSICAL,
  	author={Yuto Matsuda and Yuki Matsuda},
  	title={Tactile Paving Detection and Classification Method Based on Cyclist-Participatory Road Image Sensing},
  	booktitle={Companion Proceedings of the 27th International Conference on Distributed Computing and Networking},
  	year={2026},
  	pages={78--83},
  	url={https://doi.org/10.1145/3737611.3776614}
}`}</code></pre>
              </div>
            </div>
          </div>
        </div>
      </Modal>
    </footer>
  )
}