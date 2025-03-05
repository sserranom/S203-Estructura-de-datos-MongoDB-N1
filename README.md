# Esquemas de la base de datos Optica

Este documento describe los esquemas de dos bases de datos relacionadas con una óptica: "Optica" (usando MongoDB) y "Optica2" (usando Mongoose con Node.js).

## Optica (MongoDB)

Esta base de datos almacena información sobre clientes, empleados, gafas, ventas y proveedores.

### Colecciones

* **customers:**
    * `name` (String, requerido): Nombre del cliente.
    * `address` (String, requerido): Dirección del cliente.
    * `telephone` (String, requerido): Número de teléfono del cliente.
    * `email` (String, requerido): Correo electrónico del cliente.
    * `registerDate` (Date, requerido): Fecha de registro del cliente.
    * `referredCustomer` (ObjectId o null): ID del cliente que refirió a este cliente (opcional).

* **employees:**
    * `name` (String, requerido): Nombre del empleado.
    * `phone` (String, requerido): Número de teléfono del empleado.

* **glasses:**
    * `brand` (String, requerido): Marca de las gafas.
    * `leftGlassGraduation` (Double, requerido): Graduación del cristal izquierdo.
    * `rightGlassGraduation` (Double, requerido): Graduación del cristal derecho.
    * `leftGlassColor` (String, requerido): Color del cristal izquierdo.
    * `rightGlassColor` (String, requerido): Color del cristal derecho.
    * `frameType` (String, requerido): Tipo de montura.
    * `price` (Double, requerido): Precio de las gafas.

* **sales:**
    * `customer_id` (ObjectId, requerido): ID del cliente que realizó la compra.
    * `glasses_id` (ObjectId, requerido): ID de las gafas compradas.
    * `SaleDateTime` (Date, requerido): Fecha y hora de la venta.

* **providers:**
    * `name` (String, requerido): Nombre del proveedor.
    * `address` (Object, requerido):
        * `street` (String, requerido): Calle del proveedor.
        * `number` (String, requerido): Número de calle del proveedor.
        * `floor` (String, requerido): Piso del proveedor.
        * `door` (String, requerido): Puerta del proveedor.
        * `city` (String, requerido): Ciudad del proveedor.
        * `postalCode` (String, requerido): Código postal del proveedor.
        * `country` (String, requerido): País del proveedor.
    * `phone` (String, requerido): Número de teléfono del proveedor.
    * `fax` (String, requerido): Número de fax del proveedor.
    * `taxId` (String, requerido): ID fiscal del proveedor.
 
      [Diagrama de la base de datos](https://github.com/sserranom/S203-Estructura-de-datos-MongoDB-N1/blob/main/Ejercicio1/Optica_diagram.jpg)


## Optica2 (Mongoose)

Esta base de datos utiliza Mongoose con Node.js y tiene una estructura similar a "Optica" pero con algunas diferencias en los nombres de los campos y los tipos de datos.

### Modelos

* **Provider:**
    * `name` (String, requerido)
    * `address`: (Object, requerido)
        * `street` (String, requerido)
        * `number` (Number, requerido)
        * `floor` (Number, requerido)
        * `door` (String, requerido)
        * `city` (String, requerido)
        * `postal_code` (String, requerido)
        * `country` (String, requerido)
    * `phone` (String, requerido)
    * `fax` (String, requerido)
    * `NIF` (String, requerido)

* **Customer:**
    * `name` (String, requerido)
    * `postal_address` (String, requerido)
    * `phone` (String, requerido)
    * `email` (String, requerido)
    * `registration_date` (Date, requerido)
    * `recommended_by` (ObjectId, ref: 'Customer', default: null)

* **Glasses:**
    * `brand` (String, requerido)
    * `frame_type` (String, requerido)
    * `frame_color` (String, requerido)
    * `lens_graduation`: (Object, requerido)
        * `left` (String, requerido)
        * `right` (String, requerido)
    * `lens_color`: (Object, requerido)
        * `left` (String, requerido)
        * `right` (String, requerido)
    * `price` (Number, requerido)
    * `provider_id` (ObjectId, ref: 'Provider', requerido)
    * `buyers` ([ObjectId], ref: 'Customer')

* **Sale:**
    * `customer_id` (ObjectId, ref: 'Customer', requerido)
    * `employee_id` (ObjectId, ref: 'Employee', requerido)
    * `glasses_id` (ObjectId, ref: 'Glasses', requerido)
    * `sale_date` (Date, requerido)
 
      [Diagrama de la base de datos](https://github.com/sserranom/S203-Estructura-de-datos-MongoDB-N1/blob/main/Ejercicio2/optica2_diagram.jpg)


