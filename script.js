       (function() {
            // https://dashboard.emailjs.com/admin/account
            emailjs.init({
              publicKey: "-gdmiIDT9qEqyqDw_",
            });
        })();
        window.onload = function() {
            document.getElementById('contact-form').addEventListener('submit', function(event) {
                event.preventDefault();
                // these IDs from the previous steps
                emailjs.sendForm('contact_service', 'contact_form', this)
                    .then(() => {
                        console.log('SUCCESS!');
                    }, (error) => {
                        console.log('FAILED...', error);
                    });
            });
        }