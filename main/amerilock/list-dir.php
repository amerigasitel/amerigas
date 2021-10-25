<?php
// This program works well as an index.php file in a directory you wish
//  to display all files for.  It automatically excludes itself from the
//  list, and is easy to modify to make it disclude others as well:

// Define an array to hold the files
$files = array();

// Open the current directory
$d = dir('.');

// Loop through all of the files:
while (false !== ($file = $d->read())) {
    // If the file is not this file, and does not start with a '.' or '~'
    // and does not end in LCK, then store it for later display:
    if ( ($file{0} != '.') && 
         ($file{0} != '~') && 
         (substr($file, -3) != 'LCK') &&
         ($file != basename($_SERVER['PHP_SELF']))    ) {
        // Store the filename, and full data from a stat() call:
        $files[$file] = stat($file);
    }
}

// Close the directory
$d->close();
    
// Now let's output a basic table with this information
echo '<style>td { padding-right: 10px; }</style>';
echo '<table><caption>The contents of this directory:</caption>';

// Sort the files so that they are alphabetical
ksort($files);

// Prepare for using date functions:
date_default_timezone_set('America/New_York');

// Now loop through them, echoing out a new table row for each one:
foreach ($files as $name => $stats) {
    // Start the row, and output a link via the filename:
    echo "<tr><td><a href=\"{$name}\">{$name}</a></td>\n";
    // Now a table cell with the filesize in bytes:
    echo "<td align='right'>{$stats['size']}</td>\n";
    // Finally a column for the date:
    echo '<td>', date('m-d-Y h:ia', $stats['mtime']), "</td></tr>\n";
}

echo '</table>';
?>
