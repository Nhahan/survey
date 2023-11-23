# Survey

## Stack

- NestJS
- TypeScript
- TypeORM
- PostgreSQL
- Docker

## Prerequisite

[Docker](https://www.docker.com/products/docker-desktop/)

## Running the app

```bash
docker-compose up
```

## API

### Survey 등록

#### POST: http://localhost:4000/surveys

```json
// Request
{
  "title": "설문조사 제목",
  "description": "설문조사 설명",
}
```

### Question 등록

#### POST: http://localhost:4000/surveys/questions

```json
// Request
{
  "surveyId": 1, // 설문조사 ID
  "content": "질문",
}
```

### Question 선택지 등록

#### POST: http://localhost:4000/surveys/questions/options

```json
// Request
{
  "questionId": 1, // 질문 ID
  "content": "선택지",
  "score": 1 // 선택지 점수
}
```

### Survey 단건 조회

#### GET: http://localhost:4000/surveys/${surveyId}

### Survey 결과 등록

#### POST: http://localhost:4000/survey-results

```json
// Request
{
  "surveyId": 1, // 설문조사 ID
  "userIp": "127.0.0.1", // 유저 IP
  "totalScore": 1, // 설문조사 총점
}
```

### Survey 결과 단건 조회

#### GET: http://localhost:4000/survey-results/${surveyResultId}

## ERD

<img width="359" alt="image" src="https://github.com/Nhahan/survey/assets/81916648/39c5c056-2d97-46e1-ace7-e560220d699d">

## Features

### Logger

- 필요한 클래스마다 `LoggerService` 주입하는 반복적인 느낌을 좋아하지 않아 Global Logger를 만들어 사용했습니다.
- `CloudWatch`나 `ELK` 등으로 확장이 용이하도록, `@Logging` 데코레이터를 만들어 그 안에 추가 로직을 작성하여 로그 메시지를 관리할 수 있습니다.

### Error

- 에러 발생 시 Response 형식과 비슷한 형태로 에러를 리턴하고, Logger가 로그를 남깁니다.

```json
{
  "statusCode": 400,
  "message": "SurveyResult already exists"
}
```

### Facade

- Facade 레이어를 하나 더 두어 복잡한 로직을 처리하게 하고, Service 레이어에서는 비교적 간단한 인터페이스를 제공하게 하였습니다.
