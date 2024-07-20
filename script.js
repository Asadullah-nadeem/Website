$(document).ready(function () {
    $('img[data-toggle="modal"]').on('click', function () {
        var src = $(this).attr('src');
        $('#fullScreenImage').attr('src', src);
    });
    window.addEventListener('load', function () {
        setTimeout(function () {
            document.getElementById('loading-screen').style.display = 'none';
            document.getElementById('content').style.display = 'block';
        }, 5000);
    });

    $('#downloadButton').on('click', function () {
        var timer = 10;
        $('#timer').text('Downloading in ' + timer + ' seconds...').show();

        var countdown = setInterval(function () {
            timer--;
            $('#timer').text('Downloading in ' + timer + ' seconds...');
            if (timer <= 0) {
                clearInterval(countdown);
                $('#timer').hide();
                window.location.href = 'path/to/your/file.zip';
            }
        }, 1000);
    });
    fetch('https://api.ipify.org?format=json')
        .then(response => response.json())
        .then(data => {
            document.getElementById('ip-address').textContent = data.ip;
        })
        .catch(error => {
            console.error('Error fetching IP address:', error);
            document.getElementById('ip-address').textContent = 'Unable to fetch IP address';
        });
    let currentPage = 1;
    const itemsPerPage = 5;
    const totalItems = 20;
    function loadPage(page) {
        $('#pagination-content').html(`<p>Content for page ${page}</p>`);

        if (page <= 1) {
            $('#prevButton').prop('disabled', true);
        } else {
            $('#prevButton').prop('disabled', false);
        }

        if (page >= Math.ceil(totalItems / itemsPerPage)) {
            $('#nextButton').prop('disabled', true);
        } else {
            $('#nextButton').prop('disabled', false);
        }
    }

    $('#nextButton').on('click', function () {
        currentPage++;
        loadPage(currentPage);
    });

    $('#prevButton').on('click', function () {
        currentPage--;
        loadPage(currentPage);
    });

    loadPage(currentPage);
});

// Compiler or IDE


