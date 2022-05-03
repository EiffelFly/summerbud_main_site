---
title: 2021年10月 - 回到受雇者的生活以及影響我最大的兩個概念
slug: "202110-back-to-work-and-two-ideas"
tags: ["thought", "instill-ai", "hamming", "mind-frame"]
publishedAt: "2021-11-03T12:00:00"
lastModified: "2021-11-03T12:00:00"
description: "Hamming question 和 framer variant with Feynman technique 是我近期最重要的思想錨點。這篇文章希望能介紹這些方法論給你，並且簡略介紹目前我正在打造什麼。"
---

這篇文章想跟大家分享這個月的近況，以及近期影響我最大的兩個概念，分別是 Hamming question 以及 Framer variant - Feynman technique。前者是由 Richard Hamming 於 1986 年的演講提出的論點[^1]，鏗鏘有力，直指一個研究者或是實作者在生命之中應該持續詰問的問題。而後者則是我最近閱讀完《造局者》之後結合自身經驗構建而成的方法論。這兩個論點以超越我預想的方式影響了我，使得我的思考更加清澈，能更快速地吸收概念，並整合進自己的思考體系內。

> Hamming Question: "What are the most important problems in your field? Why aren't you working on them?"

Hamming Question 實作起來並沒有表面看來那麼簡單，我們可能會直拿當前最常被提出來的大敘事回答這個問題，例如資訊爆炸、氣候變遷、極化社會、假消息等等。然而利用這些大敘事的字眼來回答 Hamming Question 是沒有意義的。大敘事的字眼只是我們用來找到初步方向的焦點，更重要的是下一層，「什麼是引發這個問題的關鍵？以及附屬其上的行動是什麼？」

從這裡事情就會開始有趣起來了。Hamming 詰問的不只是一切問題的表象，更是這些問題有沒有可能被解決？如果有的話，你認為是從哪裡開始。因此它會帶來行動，而不是更多的疑問。舉例來說，關於我的自我介紹的那幾個問題，唯一符合這個條件的只有最後一個：「條列式的主宰地位。」它承接資訊爆炸的大敘事，並提出關鍵的問題：我們太仰賴條列式來處理資料，其解決辦法也比單純描述「資訊爆炸」來得清晰：「找到替代條列式的方法與場合。」

> Hamming Question 不只要求詰問，更要求對問題的建設性看法。

從 Hamming Question 中我們想要獲得的價值是：如何為自身的行為定錨，並在接下來的一個月、一年、十年中不斷切合這個方向前進。

另外一個概念是 Framer variant - Feynman technique。Framer 取自於同名書籍，我並沒有使用它們提出的建構方式：反事實、因果關係、限制條件。而是使用費曼先生的著名方法論。每當我找到一個可以被框架起來的概念時，我都會先嘗試以自己的話描述它，多長都沒關係，但接下來我必須嘗試把這些字句轉化成五歲小孩也可能懂的描述，以「股票的技術分析」為例：

股票技術分析的基本假設是「歷史會重演」，這句話在股票市場有時會顯得天真，但也不能小看技術分析帶來的洞見，例如「當前以技術分析為主要參考資料的人，他們會怎麼看待市場？」、「如果與技術分析的預期不同，我們是否可以推論有特殊的因素出現了？」

而向五歲的小孩解釋則會這樣說：

今天爸爸給你一顆糖，明天給你兩顆，那你覺得我後天會給你幾顆？孩子回答三顆。爸爸笑著說，那你抓到技術分析的精髓了，但我可能只給你一顆。

我們並不會直接拿這個解釋去跟五歲的小孩講，但藉由這樣的訓練，可以讓敘述變得更精簡、更有力量、甚至多了許多敘事的空間。

> Framer variant - Feynman technique：在生活中的每個片段搜集可以被結晶的思考框架，嘗試用自己的話說出來之後，再想像自己正要解釋給五歲的孩子聽，重新詮釋一遍。

然而在使用這個技巧時你會發現，解釋給五歲小孩的段落大多只是一種內省的方式，而不是向外傳遞資訊的方式。它的主要作用在於檢視自己是否真的了解某一概念的核心。在這裡我們要小心的是，看似簡單、且容易輕鬆解釋的概念，不往往總是正確，它有可能只是迎合了某種這個社會普遍接受的意念，並且偽裝成自己懷有洞見而已。

---

這個月脫離了自僱者的角色，加入了一間做電腦視覺的 ML 新創，我們想要服務的是任何一個希望從大量照片資料獲得洞見的程式設計師或是公司，例如從自己的相簿裡挑出重複的人臉、辨識發票、書寫文字轉電子文字；又或是替大量晶圓照片檢查耗損、監控孩子的狀況等等。

使用我們的服務之後，你不再需要自己架構出整套流程，從資料搜集、篩選、跑 model、佈建 model、輸出資料到目的地等過程，你需要做的只有把 model 上傳或是使用我們預設的 model，呼叫我們的 API 端點輸入資料就可以完成。（我這才理解到，之前 Totuslink 想要完成的，佈建 NLP model，並且達到高流量低延遲這件事有多複雜）

套用上面提到的方法論，我需要把這段話精簡成五歲孩子也可能懂的情境：

這邊有一疊六十幾張混有你喜歡的大哥哥的照片，你現在把他們全部找出來試試看。

（小孩一張一張挑完之後）

我給了他一根管子説：「下次你不用再自己挑照片了，你只要把這些照片全部塞到這個管子裡面，大哥哥的照片就全部被挑出來了！」

「跟魔法一樣！」

[^1]: [Richard Hamming: You and Your Research (paulgraham.com)](http://www.paulgraham.com/hamming.html)