# MonsLab_Frontend

★をたくさん付けてあげてください！

## MonsLab_Frontendの使い方
以下ではローカルでの実行手順を記載します。<br>
（デプロイ済みのリンクは[こちら](https://mons-labo-frontend.vercel.app/)）<br>

まず`frontend_project`ディレクトリ直下に以下の`.env`ファイルが必要になります。<br>
Firebaseのキーについては調べてください。
```
VITE_FIREBASE_API_KEY=""
VITE_FIREBASE_AUTH_DOMAIN=""
VITE_FIREBASE_PROJECT_ID=""
VITE_FIREBASE_STORAGE_BUCKET=""
VITE_FIREBASE_MESSAGING_SENDER_ID=""
VITE_FIREBASE_APP_ID=""
VITE_FIREBASE_MEASUREMENT_ID=""
```

まず、本レポジトリのクローンをお願いします。<br>
`git clone https://github.com/Yoh-lab/MonsLabo_frontend`

続いて、`frontend_project`ディレクトリに移動したのち必要なパッケージのインストールをお願いします。<br>
`cd frontend_project` -> `npm install`

その後、ビルドをしてください。<br>
`npm run dev`

## [MonsLab_Backend](https://github.com/Yoh-lab/MonsLabo_backend)に関して
本プロジェクトにおいてモンスターとの会話を行うために利用しています。<br>
Railwayにデプロイ済みのリンクを用いているため、特に向こうのプロジェクトを立ち上げる必要はありません
（ローカルで実行してみたい場合は向こうのREADME参照）