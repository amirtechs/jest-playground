# Public API Testing with TypeScript + Jest

This project demonstrates how to test public APIs using **TypeScript**, **Jest**, and **Axios**. It's ideal for validating responses from public endpoints like JSONPlaceholder, ReqRes, and others.

## 🔧 Technologies Used

- [TypeScript](https://www.typescriptlang.org/)
- [Jest](https://jestjs.io/)
- [ts-jest](https://kulshekhar.github.io/ts-jest/)
- [Axios](https://axios-http.com/)

 Recommended Tools:
- [Visual Studio Code](https://code.visualstudio.com/)

## 📁 Project Structure

```
public-api-test/
├── tests/                   # Contains all API test files
│   └── jsonplaceholder.test.ts
├── jest.config.js           # Jest configuration for TypeScript
├── tsconfig.json            # TypeScript configuration
├── package.json             # Project metadata and scripts
└── .gitignore               # Files/folders ignored by Git
```

## 🚀 Getting Started

### 1. Clone the repository

```bash
git clone <your-repo-url>
cd public-api-test
```

### 2. Install dependencies

```bash
npm install
```

### 3. Run the tests

```bash
npm test
```

Or with coverage:

```bash
npm run test -- --coverage
```

## ✅ Example Test

Sample test in `tests/jsonplaceholder.test.ts`:

```ts
import axios from 'axios';

describe('JSONPlaceholder API', () => {
  it('should return post with id 1', async () => {
    const res = await axios.get('https://jsonplaceholder.typicode.com/posts/1');
    expect(res.status).toBe(200);
    expect(res.data).toHaveProperty('id', 1);
  });
});
```

## 📦 NPM Scripts

| Script | Purpose                |
|--------|------------------------|
| test   | Runs Jest test suite   |

## 🙌 Contribution

Feel free to fork this repo and add test cases for other public APIs!

## 📄 License

MIT © [amirtechs](https://github.com/amirtechs)