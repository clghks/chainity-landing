블록체인 기반의 커뮤니티 활동 보상 플랫폼 랜딩 페이지 Repository

- [material-kit-react](https://github.com/creativetimofficial/material-kit-react)을 사용하였습니다.

- 로컬 개발 스크립트
```
npm start
```

- 빌드
  - `npm run build` 
  - 빌드가 완료되면 `/build` 하위에 빌드된 파일이 생성. 해당 디렉토리를 deploy
- .env
  - [Create React APP](https://facebook.github.io/create-react-app)은 기본적으로 [`dotenv`](https://github.com/motdotla/dotenv)와 [`dotenv-expand`](https://github.com/motdotla/dotenv-expand) 설정이 되어 있음
    > dotenv: .env 파일에 구성된 환경설정 변수를 불러와 사용  
    > dotenv-expand: .env 파일에 구성된 환경설정 변수를 내부에서 사용
    - 환경설정 변수는 `REACT_APP_`로 시작하여야 함
    - 자세한 내용은 [문서](https://facebook.github.io/create-react-app/docs/adding-custom-environment-variables)를 참조
  - 프로젝트에서는 `API 호출 도메인` 설정을 위해 사용
  - 로컬 개발(`npm start`) 시에는 가장 기본 파일인 `.env`를 사용하며, 빌드시에는 `.env.production`을 사용
