# Converting your React Native project to Typescript

Splitting up your conversion into three main steps.

1.) Loose
- Adding TS to package.json
- Create `tsconfig.json`
- Allow implicit `anys`
- Change files to .js to .tx/.tsx
Use `js-to-ts-converter` to help

2.) Medium
- No implicit `anys`
- Common Types
- 3rd party Types

3.) Strict
- Strict mode: true
- Removing null propagation 
- Making safe jS code