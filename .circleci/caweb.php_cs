<?php

$finder = PhpCsFixer\Finder::create()->in(__DIR__);

return PhpCsFixer\Config::create()->setRules(array(
        'strict_comparison' => true,
        'no_mixed_echo_print' => [ 'use' => 'print' ]
    ))
    ->setRiskyAllowed(true)
    ->setIndent("\t")
    ->setFinder($finder)
    ->setUsingCache(false);
