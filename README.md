# Poc Angular 11 Firebase 8 Realtime Database

https://console.firebase.google.com/

npm install -g firebase-tools
npm install firebase@8.3.2 --save
npm install @angular/fire@6.1.4 --save
npm install @angular/material@11.2.7 @angular/cdk@11.2.7 --save
npm install bootstrap5.0.0-beta3 --save

firebase login

firebase init

ng g m pages/client --module app --routing
ng g c pages/client

ng g m shared/components/form-edit --module  pages/client/clientmodule.ts
ng g c shared/components/form-edit

ng g m shared/components/list --module pages/client/client.module.ts
ng g c shared/components/list

ng g s shared/services/data/data

ng g s shared/services/client/client
