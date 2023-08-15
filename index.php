<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link href="./assets/style.css" rel="stylesheet" />
    <title>Live PHP Project</title>
</head>

<body>
    <div class="container">
        <div class="editor">
            <div class="editor-content">
                <textarea id="code"></textarea>
            </div>
            <div class="buttons">
                <button id="compileBtn">Compile</button>
                <div>
                    <input type="checkbox" id="autoCompile">
                    <label for="autoCompile">Auto Compile with Key</label>
                </div>
            </div>
        </div>
        <div class="splitter"></div>
        <div class="result">
            <div id="resultContent"></div>
        </div>
    </div>

    <script src="./assets/script.js" type="text/javascript"></script>
</body>

</html>
