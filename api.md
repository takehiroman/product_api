## API一覧
|api名|HTTPメソッド|リソースパス|
|---|---|---|
|商品一件作成|POST|/api/product/|
|商品一件取得|GET|/api/product/{id}|
|商品一件更新|POST|/api/product/{id}|
|商品一件削除|DELETE|/api/product/{id}|
|商品全件取得|GET|/api/product/all|
|商品取得|POST|/api/product/sam|

## APIの詳細
### 商品一件作成
* POSTデータ

|JSON key|型|サイズ|値の説明|
|---|---|---|---|
|name|文字列|100|登録したい商品タイトルの名前|
|introduction|文字列|500|登録したい商品の説明|
|price|文字列||登録したい商品の価格(自動的に"円"が付く)|
|imageUrl|文字列||登録したい商品画像のURL|
* 処理結果ステータス

|ステータス|説明|
|---|---|
|201|商品の登録が成功|

### 商品一件取得
* GETデータ

|JSON key|型|サイズ|値の説明|
|---|---|---|---|
|id|数値||選択した商品のid|
|name|文字列|100|idに基づいた商品タイトルの名前|
|introduction|文字列|500|idに基づいた商品の説明|
|price|文字列||idに基づいた商品の価格(自動的に"円"が付く)|
|imageUrl|文字列||idに基づいた商品画像のURL|
* 処理結果ステータス

|ステータス|説明|
|---|---|
|200|登録されたidならば登録されたデータを取得　登録されていないidならばnullが入ったデータを取得|