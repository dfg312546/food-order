import './Q&A.css'

import QAItem from './qaItem';

function QA () {
  
  return (
    <div className="faqPage-container">
      <h1 className="faqPage-title">Frequently Asked Questions</h1>
      <div className="faq-container">

        <QAItem 
          title="取消訂單辦法"
          text="訂單成立後24小時內皆可點擊'取消訂單'按鈕調整訂單項目，每訂單限修改一次。"
        />

        <QAItem 
          title="瑕疵商品回報"
          text="拍照存證通知客服退換貨。"
        />

      </div>
    </div>
  )
};

export default QA;