 var btn = document.querySelector('.btn');
        var card = document.querySelector('.card');
        var btn2 = document.querySelector('.btn2');
        var card2 = document.querySelector('.card2');
        var modal1 = document.querySelector('#modal1');
        var modal2 = document.querySelector('#modal2');
        var modal3 = document.querySelector('#modal3');
        var modal4 = document.querySelector('#modal4');

        btn.addEventListener('click', function() {
            card.style.display = 'block';
        });

        btn2.addEventListener('click', function() {
            card2.style.display = 'block';
        });

        function hideCard() {
            card.style.display = 'none';
        }

        function hideCard2() {
            card2.style.display = 'none';
        }

        window.addEventListener('click', function(event) {
            if (event.target !== card && event.target !== btn && event.target !== card2 && event.target !== btn2 && event.target !== modal1 && event.target !== modal2 && event.target !== modal3 && event.target !== modal4) {
                card.style.display = 'none';
                card2.style.display = 'none';
            }
        });