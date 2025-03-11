<?php //include 'config.php'; ?>
<?php //include 'header.php'; ?>
<?php
include 'config.php';
include 'header.php';

?>

<?php
if(!isset($_SESSION['product_id'])) {
    echo "<script type='text/javascript'>document.location.href='{$hostname}';</script>";
}
?>

<html>
<head>
    <link href="https://fonts.googleapis.com/css?family=Nunito+Sans:400,400i,700,900&display=swap" rel="stylesheet">
</head>
<style>
    .checkout-body {

        justify-content: center;
        text-align: center;
        padding: 40px 0;
        background: white;
    }
    h1 {
        color: #88B04B;
        font-family: "Nunito Sans", "Helvetica Neue", sans-serif;
        font-weight: 900;
        font-size: 40px;
        margin-bottom: 10px;
    }
    p {
        color: #404F5E;
        font-family: "Nunito Sans", "Helvetica Neue", sans-serif;
        font-size:20px;
        margin: 0;
    }
    i {
        color: #9ABC66;
        font-size: 100px;
        line-height: 200px;
        margin-left:-15px;
    }
    .card {
        /*background: white;*/
        padding: 60px;
        /*border-radius: 4px;*/
        /*box-shadow: 0 2px 3px #C8D0D8;*/
        margin: 0 auto;
    }
</style>
<body>
<div class="card checkout-body">
    <div style="border-radius:200px; height:200px; width:200px; background: #F8FAF5; margin:0 auto;">
        <i class="checkmark">✓</i>
    </div>
    <h1>Success</h1>
    <p>We received your purchase request;<br/> we'll be in touch shortly!</p>
</div>
</body>
</html>
<?php
$user = $_SESSION['username'];
$product_id = $_SESSION['product_id'];
$product_qty = $_SESSION['product_qty'];
$product_total = $_SESSION['product_total'];

$db = new Database();
$db->select('options','site_name',null,null,null,null);
$site_name = $db->getResult();

//echo json_encode($_SESSION['product_id']);

$params1 = [
    'item_number' => $product_id,
    'payment_gross' => $product_total,
    'payment_status' => 'credit',

];
$params2 = [
    'product_id' => $product_id,
    'product_qty' => $product_qty,
    'total_amount' => $product_total,
    'product_user' => $_SESSION['user_id'],
    'order_date' => date('Y-m-d'),
    'pay_req_id' => ''
];
$db = new Database();
$db->insert('payments',$params1);
$db->insert('order_products',$params2);
$db->getResult();
unset($_SESSION['product_id']);
unset($_SESSION['product_qty']);
unset($_SESSION['product_total']);
include 'footer.php'; ?>

