var openDialogBtns = document.querySelectorAll('.open-dialog-btn');
        var dialogOverlays = document.querySelectorAll('.dialog-overlay');

        openDialogBtns.forEach(function(btn, index) {
            btn.addEventListener('click', function() {
                dialogOverlays[index].style.display = 'flex';
            });
        });

        dialogOverlays.forEach(function(overlay) {
            overlay.addEventListener('click', function(event) {
                if (event.target === overlay) {
                    overlay.style.display = 'none';
                }
            });
        });