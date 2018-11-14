<?php
/* //Uncomment when you want to search for one term
// accept a term (keyword)
// respond with a value

$query = $_GET['q'];
$definition = [
    "definition" => "A statement of the exact meaning of a word, especially in a dictionary.",
    "bar" => "A place that sells alcholic beverages",
    "ajax" => "Technique which involves the use of javascript and xml (or JSON)",
    "html" => "The standard markup language for creating web pages and web applications.",
    "css" => "A style sheet language used for describing the presentation of a document written in a markup language.",
    "javascript" => "A lightweight, interpreted programming language with first-class functions that adds interactivity to your website.",
    "php" => "A server-side scripting language, and a powerful tool for making dynamic and interactive websites",
];


print "<h3>" . strtoupper($query) . "</h3>";
print "<p>" . $definition[$query] . "</p>";
*/ //Uncomment when you want to search for one term

$myXMLData = '<?xml version = "1.0" encoding ="UTF-8"?>
<entries>
    <definition name = "definition" author = "John">
    a statement of the exact meaning of a word, especially in a dictionary. 
    </definition>
    <definition name = "bar" author ="Mary">
    a place that sells alcoholic beverages
    </definition>
    <definition name ="ajax" author = "Kimberly">
    technique which involves the use of javascript and xml
    </definition>
    <definition name = "html" author = "Michelle">
    The standard markup language for creating web pages and web applications
    </definition>
    <definition name = "css" author = "Charlene">
    A style sheet language used for describing the presentation of a document written in a markup language
    </definition>
    <definition name = "javascript" author = "Audrea">
    A lightweight, interpreted programming language with first-class functions that adds interactivity to your website.
    </definition>
    <definition name = "php" author = "Chris-San">
    A server-side scripting language, and a powerful tool for making dynamic and interactive websites
    </definition>
</entries>'; 

header('Content-Type: text/xml');
$xmlOutput = new SimpleXMLElement($myXMLData);
echo $xmlOutput->asXML();