<?php

/*
 * This is a dummy file to represent the main file that boots your
 * application. I've put HTML below just to show how Encore would
 * work (e.g. what the script/link tags look like) in a simple way.
 * Normally you would add the script/link tags onto your page
 * however you normally do in your framework or application.
 */

function getEntryFiles($entry, $type)
{
    $data = json_decode(file_get_contents(
        __DIR__.'/build/entrypoints.json'
    ), true);

    return $data['entrypoints'][$entry][$type];
}

?>
<DOCTYPE! html>
<html lang="en">
<head>
    <meta charset="utf-8">
    <title>Example page to show off Webpack Encore</title>
    <?php foreach (getEntryFiles('app', 'css') as $path): ?>
        <link rel="stylesheet" href="<?php echo $path; ?>">
    <?php endforeach; ?>
</head>
<body>
    <section>
        <h1>Hello Webpack Encore!</h1>
    </section>

    <?php foreach (getEntryFiles('app', 'js') as $path): ?>
        <script src="<?= $path; ?>"></script>
    <?php endforeach; ?>
</body>
</html>
