# Bamazon
Online storefront application to track product sales (using MySql and Node JS to build database)

Initial MySql Database with inventory of items is created for user query

<p align="center">
  <img src="/images/mysqldatabase.PNG" />
</p>

Using the Command Line Terminal, user is able to view product inventory and is prompted to choose and item and quantity for purchase.

<p align="center">
  <img src="/images/bamazonintro.PNG" />
</p>

If the user selects a quantity that is more than the inventory has, the terminal will log that there is "Insufficgitient Quantity!".

<p align="center">
  <img src="/images/insufficient-quantity.PNG" />
</p>

If the database has enough stock quantity for the purchase, the database will update to reflect a lower inventory and will display new stock quantity to the users.

<p align="center">
  <img src="/images/bamazon-update.PNG" />
</p>

<br />

<p align="center">
  <img src="/images/mysql-update.PNG" />
</p>

At the end of the transaction, the application returns the user to the start prompts for purchasing more items.