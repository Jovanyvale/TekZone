import { Router } from "express";
import { createProduct, getProducts, getProductById, updateProduct, updateStock, deleteProduct } from "./handlers/product";
import { body, param } from "express-validator";
import { handleInputErros } from "./middleware";

const router = Router()
//Swagger schema
/**
 * @swagger
 * components:
 *  schemas:
 *      Product:
 *          type: object
 *          properties:
 *              id:
 *                  type: integer
 *                  description: The product ID
 *                  example: 1
 *              name:
 *                  type: string
 *                  description: The product Name
 *                  example: Laptop
 *              description:
 *                  type: string
 *                  description: The product's description
 *                  example: i5 12400f, RTX3060, 16GB RAM DDR4
 *              price:
 *                  type: integer
 *                  description: The product Price
 *                  example: 700
 *              image:
 *                  type: string
 *                  description: The product url image
 *                  example: images/image1.jpeg
 * 
 *              stock:
 *                  type: integer
 *                  description: The product quantity on stock
 *                  example: 30
 */

/**
 * @swagger
 * /api/products:
 *   get:
 *     summary: Get a list of all the products
 *     tags: 
 *       - Products
 *     description: Return a list of all products
 *     responses: 
 *       200:
 *         description: Successful response
 *         content:
 *           application/json:
 *             schema: 
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Product'
 */

/**
 * @swagger
 * /api/products/{id}:
 *  get:
 *      summary: Get a product by ID
 *      tags:
 *          - Products
 *      description: Return a product based on the ID provided
 *      parameters:
 *        - in: path
 *          name: id
 *          description: The id of the product to retrieve
 *          schema:
 *              type: integer
 *      responses: 
 *          200:
 *              description: Successful response
 *              content:
 *                  application/json:
 *                      schema:
 *                          $ref: '#/components/schemas/Product'
 *          404:
 *              description: Not found
 *          400:
 *              description: Bad request - invalid parameter
 */

/**
 * @swagger
 * /api/products:
 *   post:
 *     summary: Creates a new product
 *     tags:
 *       - Products
 *     description: Returns a new record to the database
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name: 
 *                 type: string
 *                 example: Laptop
 *               price: 
 *                 type: integer
 *                 example: 700
 *               description:
 *                 type: string
 *                 example: i5 12400f, RTX3060, 16GB RAM DDR4  
 *               image:
 *                 type: string
 *                 example: images/image1.jpeg
 *               stock:
 *                 type: integer
 *                 example: 30
 *     responses:
 *       201:
 *         description: Product created successfully
 *       400:
 *         description: Bad request - Invalid data provided
 */

/**
 * @swagger
 * /api/products/{id}:
 *   put:
 *     summary: Updates a product with the provided info
 *     tags:
 *       - Products
 *     description: Return an updated product
 *     parameters: 
 *       - in: path
 *         name: id
 *         required: true
 *         description: The ID of the product to update
 *         schema:
 *           type: integer
 *     requestBody: 
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name: 
 *                 type: string
 *                 example: Laptop
 *               price: 
 *                 type: integer
 *                 example: 700
 *               description:
 *                 type: string
 *                 example: i5 12400f, RTX3060, 16GB RAM DDR4  
 *               image:
 *                 type: string
 *                 example: images/image1.jpeg
 *               stock:
 *                 type: integer
 *                 example: 30
 *     responses:
 *       200:
 *         description: Successful response
 *         content: 
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Product'
 *       400:
 *         description: Bad request
 *       404:
 *         description: Product not found
 */

/**
 * @swagger
 * /api/products/{id}:
 *   patch:
 *     summary: Update a product partially by ID
 *     tags:
 *       - Products
 *     description: Update one or more fields of a product by its ID
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: The ID of the product to update
 *         schema:
 *           type: integer
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name: 
 *                 type: string
 *                 example: Laptop
 *               price: 
 *                 type: integer
 *                 example: 700
 *               description:
 *                 type: string
 *                 example: i5 12400f, RTX3060, 16GB RAM DDR4  
 *               image:
 *                 type: string
 *                 example: images/image1.jpeg
 *               stock:
 *                 type: integer
 *                 example: 30
 *     responses:
 *       200:
 *         description: Product successfully updated
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Product'
 *       400:
 *         description: Invalid input
 *       404:
 *         description: Product not found
 */

/**
 * @swagger
 * /api/products/{id}:
 *   delete:
 *     summary: Delete a product from the data base
 *     tags:
 *       - Products
 *     description: Delete a product by the provided id
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: The ID of the product to update
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Successful response
 *         content: 
 *           application/json:
 *             schema:
 *               type: string
 *               value: "Product Deleted"
 *       400:
 *         description: Bad request
 *       404:
 *         description: Product not found
 */

//Routing 
router.get('/', getProducts)

router.get('/:id',
    param('id').isInt().withMessage('Not valid id'),
    handleInputErros,
    getProductById)

router.post('/', body('name').notEmpty().withMessage('Name field can not be empty'),
    body('price').isNumeric().notEmpty().withMessage('Price field can not be empty'),
    handleInputErros,
    createProduct)

router.put('/:id', body('name').notEmpty().withMessage('Name field can not be empty'),
    body('price').isNumeric().notEmpty().withMessage('Price field can not be empty'),
    body('stock').isNumeric().notEmpty().withMessage('Stock field can not be empty'),
    handleInputErros,
    updateProduct)

router.patch('/:id', param('id').isInt().withMessage('Not valid id'),
    handleInputErros,
    updateStock)

router.delete('/:id', param('id').isInt().withMessage('Not valid id'),
    handleInputErros,
    deleteProduct
)

export default router