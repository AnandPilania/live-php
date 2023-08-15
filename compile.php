<?php
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $code = $_POST['code'];

    // Compiling and executing PHP code
    ob_start();
    eval($code);
    $result = ob_get_clean();

    echo json_encode(['result' => $result]);
}
