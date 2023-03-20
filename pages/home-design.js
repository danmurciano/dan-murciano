import React from "react";
import { Carousel } from 'react-bootstrap';
import { Icon, Button, Breadcrumb } from 'semantic-ui-react';
import ImagesCarousel from "../components/Project/ImagesCarousel";


export default function HomeDesign() {

  const homeDesignImages = ["hd8", "hd2", "hd3", "hd4", "hd5", "hd6", "hd7"];

  const sections = [
    { key: 'Home', content: 'Home', href: "/" },
    { key: 'Projects', content: 'Projects', href: "/#projects" },
    { key: 'Home-Design', content: 'Home-Design' },
  ]


  return (
    <div class="pageHome">
      <div class="home-design">
        <div class="breadcrumb-div">
          <Breadcrumb className="breadcrumb" size="small" icon='right angle' sections={sections} />
        </div>


        <div class="carousel">
          <ImagesCarousel images={homeDesignImages} />

          <div class="open-app-btn">
            <a href="http://home-design.danmurciano.vercel.app" target="_blank" rel="noopener noreferrer">
              Open App
              <Icon className="arrow-icon" name="arrow alternate circle right"/>
            </a>
          </div>
        </div>


        <div class="project-page-text">
          <h4> Description </h4>
          <p> Home Design is a React/ Nextjs based mock e-commerce app. Below is a detailed description of the functionality and underlying logic. </p>

          <br/>
          <h4> Database </h4>
          <p> The app uses a MongoDB database with 4 models: </p>
          <p> 1. Products - mock products based on IKEA products. Every product has attributes like name, price, description, image etc.
          Overall, product info has been kept pretty basic. A real world web store might have had more detailed product descriptions,
          more images and possibly user reviews. For the purpose of this app, all of these seemed beyond necessary. </p>
          <p> 2. Users - users that have signed up to the app. Signing up is required for making purchases.
          A user can be set as “admin” by the root user, and get admin privileges. </p>
          <p> 3. Carts - every user is assigned a cart at signup. </p>
          <p> 4. Orders - completed orders made by users. Every order is associated with a specific user and includes an array of one or more products.
          Quantity of each product and price are recorded at the time the order is made.
          Other product info is not recorded, but can be retrieved using the Product model. </p>

          <br/>
          <h4> User Interface </h4>
          <p>
          Main app page - allows user to view products, as well as search and filter products by price and category.
          A logged in user can also add products to cart. </p>

          <p> Cart page - allows user to view products in cart, as well as remove products from cart and change quantity.
          Checkout button will open a “Stripe” modal, where a user can fill in his info and place an order (this is a test mode, and no actual real world credit card transaction occurs, only a demo transaction).
          If transaction is successful, user will be redirected to an order confirmation page. Also, it will create a new order entry in the database and will empty the user’s cart.
          In addition to the cart page, there’s a more condensed pop up version of the shopping cart that’s available in the navbar, and has a more limited functionality. </p>

          <p> Account page - shows user basic info and user’s past orders.
          Every order includes a link to its individual order page, that displays the order info in a little more detail. </p>

          <br/>
          <h4> Admin Mode </h4>
          <p> A user with role set as “admin” will be directed to the admin section when logging in.
              The admin section includes a "products" page and an "orders" page. </p>
          <p> Products - admin can view products, as well as search and filter. He can also create new products and edit existing products.
          Edits done in existing products, will also update all the occurrences of these products in users’ carts throughout the database. However, it will not effect the cart of a user that has the cart page open in the very same time and about to checkout, so a user is unlikely to experience a last minute price change due to an edit done by admin (at least so long a  refresh of the cart page doesn’t occur).
          An admin can set product status to “discontinued”.
          That will remove the product from the list of products that are displayed on the main app page,
          but will keep it on all recorded orders throughout the database where it occurred.
          Somewhat destructively, it will remove all occurrences of the product in users’ carts throughout the database.
          For this reason, this specific update requires an admin’s extra confirmation. </p>

          <p> Orders - allows admin to view orders info, as well as search and filter orders.
          Further more, it allows to update order status, which records the time the update is done. </p>

          <br/>
          <h4> Security and Authentication </h4>
          <p>
          An unauthenticated user can only view products (as well as search and filter).
          Trying to access other pages within the app will redirect user to the login / signup page.
          An authenticated user has access to his / her own account and cart pages.
          When a user successfully logs in or signs up, a token is being sent to his browser.
          This token is required by account and cart related api’s,
          that use it to authenticate the user and send only the data associated with this particular user.

          An authenticated admin also has access to the admin pages (cart is removed from the navbar, as it is irrelevant).
          When an admin successfully logs in, he receives both a regular user token and an admin token.
          The admin token is required by admin api’s, that uses it to authenticate the request as one made by an admin, and send the appropriate data.
          </p>

        </div>
      </div>

    </div>
  );
}
