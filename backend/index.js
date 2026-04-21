const express = require('express');
const cors = require('cors');

const swaggerUi = require('swagger-ui-express');
const swaggerJsdoc = require('swagger-jsdoc');

const app = express();
app.use(cors());
app.use(express.json());

/* ================= SWAGGER CONFIG ================= */
const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'API Product',
      version: '1.0.0',
      description: 'Swagger API demo',
    },
    servers: [
      {
        url: 'http://localhost:3000',
      },
    ],
  },
  apis: ['./index.js'], // đọc comment swagger trong file này
};

const swaggerSpec = swaggerJsdoc(options);

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

/* ================= API ================= */
/**
 * @swagger
 * /api/v1/product:
 *   get:
 *     summary: Lấy danh sách sản phẩm
 *     responses:
 *       200:
 *         description: Thành công
 */
app.get('/api/v1/product', (req, res) => {
  res.json([
    { id: 1, name: 'Iphone 15' },
    { id: 2, name: 'Samsung S24' },
  ]);
});

/* ================= RUN SERVER ================= */
app.listen(3000, () => {
  console.log('Server chạy tại http://localhost:3000');
  console.log('Swagger tại http://localhost:3000/api-docs');
});

