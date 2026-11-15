// Import jQuery
import $ from 'jquery';


$(document).ready(function () {


    // ================= Tabs Logic (jQuery) =================

    $('.tab-btn').on('click', function () {

        // Get target ID
        const target = $(this).attr('data-target');


        // Remove active classes from all tabs
        $('.tab-btn').removeClass(
            'text-blue-500 border-b-2 border-blue-500'
        );

        $('.tab-btn').addClass('text-zinc-400');


        // Add active classes to clicked tab
        $(this).addClass(
            'text-blue-500 border-b-2 border-blue-500'
        );

        $(this).removeClass('text-zinc-400');


        // Hide all tab contents
        $('.tab-content').removeClass('active');


        // Show selected tab content
        $('#' + target).addClass('active');

    });



    // ================= Accordion Logic (jQuery) =================

    $('.accordion-header').on('click', function () {

        // Get accordion body
        const $body = $(this).next('.accordion-body');


        // Toggle hidden class
        $body.toggleClass('hidden');


        // Get last span
        const $span = $(this).find('span:last-child');


        // Change icon
        const icon = $body.hasClass('hidden') ? '+' : '-';

        $span.text(icon);

    });



    // ================= Copy Code Logic (jQuery) =================

    $('.copy-code-btn').on('click', function () {

        // Get code inside the current code box
        const $button = $(this);

        const code = $button
            .closest('.relative')
            .find('code')
            .text();


        // Copy code to clipboard
        navigator.clipboard.writeText(code).then(function () {

            // Save original button content
            const original = $button.html();


            // Change button to check mark
            $button.text('✓');


            // Restore original button after 1.5 seconds
            setTimeout(function () {

                $button.html(original);

            }, 1500);

        }).catch(function (error) {

            console.error('Copy failed:', error);

        });

    });


});
