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

